import { PodcastService } from "@Podcaster/domain/interfaces/podcast-service.interface";
import { PodcastModel } from "@Podcaster/domain/models/podcast.model";
import { BaseService } from "@Shared/infrastructure/services/base.service";
import { Entry, PodcastApiResponse } from "../rest/podcast.api-types";

export class PodcastApiRestService
  extends BaseService
  implements PodcastService
{
  private cacheName = "podcast-cache";
  private cacheMaxTime = 86400000;

  private mapToDomain(entry: Entry): PodcastModel {
    return {
      id: entry.id.attributes["im:id"],
      author: entry["im:artist"].label,
      label: entry["im:name"].label,
      title: entry.title.label,
      image: entry["im:image"][2].label,
      description: entry.summary.label,
    };
  }

  async getPostCastById(id: string) {
    const podcasts = await this.getAllPoscast();
    return podcasts.data.find((podcast) => podcast.id === id) ?? null;
  }

  async getAllPoscast() {
    const cacheData = this.getFromCache<PodcastApiResponse>(
      this.cacheName,
      this.cacheMaxTime
    );
    if (cacheData) {
      return {
        data: cacheData.feed.entry.map(this.mapToDomain.bind(this)),
        total: cacheData.feed.entry.length,
      };
    }

    const data: PodcastApiResponse = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      )}`
    )
      .then((res) => {
        if (!res.ok)
          throw new Error(`Internal Error: ${res.status} ${res.statusText}`);
        return res.json().then((data) => JSON.parse(data.contents));
      })
      .then((data: PodcastApiResponse) => {
        this.storeCache(data, this.cacheName);
        return data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });

    return {
      data: data.feed.entry.map(this.mapToDomain.bind(this)),
      total: data.feed.entry.length,
    };
  }
}
