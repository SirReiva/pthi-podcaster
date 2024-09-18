import { Inject } from "@Shared/infrastructure/di/di-container";
import { EpisodeServiceToken } from "@Shared/infrastructure/di/tokens";

export class GetPodcastEpisodeUseCase {
  constructor(private readonly episodeService = Inject(EpisodeServiceToken)) {}

  execute(podcastId: string, episodeId: number) {
    return this.episodeService.getEpisodeById(podcastId, episodeId);
  }
}
