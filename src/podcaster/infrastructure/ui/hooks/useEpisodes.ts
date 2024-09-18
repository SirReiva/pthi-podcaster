import { GetPodcastEpisodesUseCaseToken } from "@Shared/infrastructure/di/tokens";
import { useContainer } from "@Shared/infrastructure/ui/hooks/useContainer";
import { useQuery } from "@tanstack/react-query";

export const useEpisodes = (id: string) => {
  const getPodcastEpisodesUse = useContainer(GetPodcastEpisodesUseCaseToken);
  const query = useQuery({
    queryKey: ["episodes", id],
    queryFn: ({ queryKey }) => getPodcastEpisodesUse.execute(queryKey[1]),
    staleTime: 0,
  });

  return query;
};
