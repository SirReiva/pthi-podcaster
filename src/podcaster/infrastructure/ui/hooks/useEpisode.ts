import { GetPodcastEpisodeUseCaseToken } from "@Shared/infrastructure/di/tokens";
import { useContainer } from "@Shared/infrastructure/ui/hooks/useContainer";
import { useQuery } from "@tanstack/react-query";

export const useEpisode = (podcastId: string, episodeId: string) => {
  const getPodcastEpisodeUseCase = useContainer(GetPodcastEpisodeUseCaseToken);
  const query = useQuery({
    queryKey: ["episodes", podcastId, episodeId],
    queryFn: ({ queryKey }) =>
      getPodcastEpisodeUseCase.execute(queryKey[1], Number(queryKey[2])),
    staleTime: 0,
  });

  return query;
};
