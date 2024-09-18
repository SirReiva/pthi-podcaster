import { Container } from "./di-container";
import {
  EpisodeServiceToken,
  GetPodcastEpisodesUseCaseToken,
  GetPodcastEpisodeUseCaseToken,
  GetPodcastsUseCaseToken,
  GetPodcastUseCaseToken,
  PodcastServiceToken,
} from "./tokens";

const container = new Container();
container.register(EpisodeServiceToken);
container.register(PodcastServiceToken);
container.register(GetPodcastsUseCaseToken);
container.register(GetPodcastUseCaseToken);
container.register(GetPodcastEpisodesUseCaseToken);
container.register(GetPodcastEpisodeUseCaseToken);
export default container;
