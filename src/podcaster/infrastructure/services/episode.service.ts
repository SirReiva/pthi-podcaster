import { EpisodeService } from "@Podcaster/domain/interfaces/episode-service.interface";
import { EpisodeModel } from "@Podcaster/domain/models/episode.model";
import { BaseService } from "@Shared/infrastructure/services/base.service";
import { EpisodeResult, EpisodesApiResponse } from "../rest/episode.api-types";

export class EpisodeApiRespService
  extends BaseService
  implements EpisodeService
{
  private cacheName = "episodes-cache";
  private cacheMaxTime = 86400000;

  private mapToDoamin(episode: EpisodeResult): EpisodeModel {
    return {
      id: episode.trackId,
      title: episode.trackName,
      date: new Date(episode.releaseDate),
      duration: episode.trackTimeMillis,
      description: episode.description ?? episode.shortDescription ?? "",
      url: episode.episodeUrl,
    };
  }

  async getEpisodeById(podcastId: string, episodeId: number) {
    const data = await this.getEpisodesByPodcastId(podcastId);
    const episode = data.data.find((episode) => episode.id === episodeId);

    return episode ?? null;
  }

  async getEpisodesByPodcastId(podcastId: string) {
    const cacheData = this.getFromCache<EpisodesApiResponse>(
      this.cacheName + podcastId,
      this.cacheMaxTime
    );
    if (cacheData) {
      return {
        total: cacheData.resultCount,
        data: cacheData.results.map(this.mapToDoamin.bind(this)),
      };
    }

    const data: EpisodesApiResponse = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    )
      .then((res) => {
        if (!res.ok)
          throw new Error(`Internal Error: ${res.status} ${res.statusText}`);
        return res.json().then((data) => JSON.parse(data.contents));
      })
      .then((data: EpisodesApiResponse) => {
        this.storeCache(data, this.cacheName + podcastId);
        return data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });

    return {
      total: data.resultCount,
      data: data.results.map(this.mapToDoamin.bind(this)),
    };
  }
}
