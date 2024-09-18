import { PodcastModel } from "../models/podcast.model";

export interface PodcastService {
  getAllPoscast: () => Promise<{ total: number; data: PodcastModel[] }>;
  getPostCastById: (id: string) => Promise<PodcastModel | null>;
}
