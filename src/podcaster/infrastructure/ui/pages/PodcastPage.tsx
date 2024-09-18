import { useParams } from "react-router-dom";
import { usePodcast } from "../hooks/usePodcast";
import { useEpisodes } from "../hooks/useEpisodes";
import HeaderLoader from "@Shared/infrastructure/ui/components/Loader";
import Card from "@Shared/infrastructure/ui/components/Card";
import PodcastInfoSection from "../components/PodcastInfoSection";
import EpisodesTable from "../components/EpisodesTable";
import Spinner from "@Shared/infrastructure/ui/components/Spinner";

const PodcastPage = () => {
  const { podcastId } = useParams();
  const { data: podcast, isFetching: isLoadingPodcast } = usePodcast(
    podcastId as string
  );
  const { data: episodesResult, isFetching: isLoadingEpisodes } = useEpisodes(
    podcastId as string
  );

  return (
    <div>
      {(isLoadingEpisodes || isLoadingPodcast) && <HeaderLoader />}
      <div className="flex flex-row gap-12">
        <aside className="w-96 max-w-96 min-w-96">
          <Card>
            {podcast ? (
              <PodcastInfoSection podcast={podcast} />
            ) : (
              <div className="w-full flex justify-center items-center">
                <Spinner />
              </div>
            )}
          </Card>
        </aside>
        <section className="flex  flex-col grow gap-4">
          {podcast && episodesResult ? (
            <>
              <Card>
                <h1 className="font-bold text-lg">
                  Episodes: {episodesResult.total}
                </h1>
              </Card>
              <Card>
                <EpisodesTable
                  episodes={episodesResult.data}
                  podcastId={podcast.id}
                />
              </Card>
            </>
          ) : (
            <Card>
              <div className="w-full flex justify-center items-center">
                <Spinner />
              </div>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
};

export default PodcastPage;
