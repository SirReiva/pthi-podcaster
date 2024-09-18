import { GetPodcastsUseCaseToken } from "@Shared/infrastructure/di/tokens";
import { useContainer } from "@Shared/infrastructure/ui/hooks/useContainer";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useSearchPodcast = (serchTern?: string) => {
  const getPodcastsUseCase = useContainer(GetPodcastsUseCaseToken);
  const query = useQuery({
    queryKey: ["podcast"],
    queryFn: () => getPodcastsUseCase.execute(),
    staleTime: 0,
  });

  const podcasts = useMemo(
    () =>
      query.data && serchTern
        ? {
            data: query.data.data.filter((d) =>
              d.title.toLowerCase().includes(serchTern.toLowerCase())
            ),
            total: query.data.data.filter((d) =>
              d.title.toLowerCase().includes(serchTern.toLowerCase())
            ).length,
          }
        : query.data,
    [query.data, serchTern]
  );

  return {
    ...query,
    data: podcasts,
  };
};
