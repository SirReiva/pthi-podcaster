export interface EpisodesApiResponse {
  resultCount: number;
  results: EpisodeResult[];
}

export interface EpisodeResult {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: { name: string; id: string }[];
  previewUrl?: string;
  artistIds?: number[];
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  closedCaptioning?: string;
  episodeUrl?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
}
