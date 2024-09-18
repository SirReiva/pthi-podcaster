import { Inject } from "@Shared/infrastructure/di/di-container";
import { PodcastServiceToken } from "@Shared/infrastructure/di/tokens";

export class GetPodcastUseCase {
  constructor(private readonly podcastService = Inject(PodcastServiceToken)) {}

  execute(podcastId: string) {
    return this.podcastService.getPostCastById(podcastId);
  }
}
