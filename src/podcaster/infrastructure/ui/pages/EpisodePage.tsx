import { useParams } from "react-router-dom";
import { usePodcast } from "../hooks/usePodcast";
import { useEpisode } from "../hooks/useEpisode";
import PodcastInfoSection from "../components/PodcastInfoSection";
import Card from "@Shared/infrastructure/ui/components/Card";
import HeaderLoader from "@Shared/infrastructure/ui/components/Loader";
import Spinner from "@Shared/infrastructure/ui/components/Spinner";

const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const { data: podcast, isFetching: isLoadingPodcast } = usePodcast(
    podcastId as string
  );
  const { data: episode, isFetching: isLoadingEpisode } = useEpisode(
    podcastId as string,
    episodeId as string
  );

  return (
    <>
      {(isLoadingEpisode || isLoadingPodcast) && <HeaderLoader />}
      <div>
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
          <section className="flex flex-col grow gap-4">
            <Card>
              {podcast && episode ? (
                <>
                  <h1 className="text-xl font-bold">{episode.title}</h1>
                  <p className="mb-4 p-1 italic bg-slate-100">
                    {episode.description}
                  </p>
                  <hr className="mb-4" />
                  {!!episode.url && (
                    <audio className="w-full" src={episode.url} controls />
                  )}
                </>
              ) : (
                <div className="w-full flex justify-center items-center">
                  <Spinner />
                </div>
              )}
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default EpisodePage;
