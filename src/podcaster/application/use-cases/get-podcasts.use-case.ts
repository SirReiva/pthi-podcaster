import { Inject } from "@Shared/infrastructure/di/di-container";
import { PodcastServiceToken } from "@Shared/infrastructure/di/tokens";

export class GetPodcastsUseCase {
  constructor(private readonly podcastService = Inject(PodcastServiceToken)) {}

  execute() {
    return this.podcastService.getAllPoscast();
  }
}
