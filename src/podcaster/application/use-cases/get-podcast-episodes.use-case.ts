import { Inject } from "@Shared/infrastructure/di/di-container";
import { EpisodeServiceToken } from "@Shared/infrastructure/di/tokens";

export class GetPodcastEpisodesUseCase {
  constructor(private readonly episodeService = Inject(EpisodeServiceToken)) {}

  execute(podcastId: string) {
    return this.episodeService.getEpisodesByPodcastId(podcastId);
  }
}
