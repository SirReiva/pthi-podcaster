import { EpisodeModel } from "../models/episode.model";

export interface EpisodeService {
  getEpisodesByPodcastId: (
    podcastId: string
  ) => Promise<{ total: number; data: EpisodeModel[] }>;
  getEpisodeById: (
    podcastId: string,
    episodeId: number
  ) => Promise<EpisodeModel | null>;
}
