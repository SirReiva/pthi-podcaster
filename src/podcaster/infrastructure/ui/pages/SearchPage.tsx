import HeaderLoader from "@Shared/infrastructure/ui/components/Loader";
import { useDebounce } from "@Shared/infrastructure/ui/hooks/useDebounce";
import { useState } from "react";
import PodcastCard from "../components/PodcastCard";
import { useSearchPodcast } from "../hooks/useSearchPodcast";
import Spinner from "@Shared/infrastructure/ui/components/Spinner";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 200);
  const { data: podcasts, isFetching } = useSearchPodcast(debounceSearch);

  return (
    <>
      {isFetching && <HeaderLoader />}
      <div className="flex gap-3 justify-end mb-4">
        <span className="bg-blue-600 py-1 px-2 rounded-md text-white font-bold inline-flex justify-center items-center">
          {podcasts?.total ?? 0}
        </span>
        <input
          className="border-gray-600 border-2 rounded-sm py-1 px-3"
          placeholder="Filter podcasts..."
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {isFetching && <Spinner />}
        {podcasts?.data.map((poscast) => (
          <PodcastCard key={poscast.id} podcast={poscast} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
