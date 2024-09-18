import { GetPodcastUseCaseToken } from "@Shared/infrastructure/di/tokens";
import { useContainer } from "@Shared/infrastructure/ui/hooks/useContainer";
import { useQuery } from "@tanstack/react-query";

export const usePodcast = (id: string) => {
  const getPodcastUseCase = useContainer(GetPodcastUseCaseToken);
  const query = useQuery({
    queryKey: ["podcast", id],
    queryFn: ({ queryKey }) => getPodcastUseCase.execute(queryKey[1]),
    staleTime: 0,
  });

  return query;
};
