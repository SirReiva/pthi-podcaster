import { EpisodeService } from "@Podcaster/domain/interfaces/episode-service.interface";
import { createToken } from "./di-container";
import { EpisodeApiRespService } from "@Podcaster/infrastructure/services/episode.service";
import { PodcastService } from "@Podcaster/domain/interfaces/podcast-service.interface";
import { PodcastApiRestService } from "@Podcaster/infrastructure/services/podcast.service";
import { GetPodcastsUseCase } from "@Podcaster/application/use-cases/get-podcasts.use-case";
import { GetPodcastUseCase } from "@Podcaster/application/use-cases/get-podcast.use-case";
import { GetPodcastEpisodesUseCase } from "@Podcaster/application/use-cases/get-podcast-episodes.use-case";
import { GetPodcastEpisodeUseCase } from "@Podcaster/application/use-cases/get-podcast-episode.use-case";

export const EpisodeServiceToken = createToken<EpisodeService>(
  EpisodeApiRespService
);
export const PodcastServiceToken = createToken<PodcastService>(
  PodcastApiRestService
);

export const GetPodcastsUseCaseToken =
  createToken<GetPodcastsUseCase>(GetPodcastsUseCase);

export const GetPodcastUseCaseToken =
  createToken<GetPodcastUseCase>(GetPodcastUseCase);

export const GetPodcastEpisodesUseCaseToken =
  createToken<GetPodcastEpisodesUseCase>(GetPodcastEpisodesUseCase);

export const GetPodcastEpisodeUseCaseToken =
  createToken<GetPodcastEpisodeUseCase>(GetPodcastEpisodeUseCase);
