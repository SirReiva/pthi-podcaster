import { EpisodeModel } from "@Podcaster/domain/models/episode.model";
import { format } from "date-fns";
import { Link } from "react-router-dom";

type Props = {
  episodes: EpisodeModel[];
  podcastId: string;
};

const formatDuration = (ms: number) => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0 || val[0] === "minute")
    .map(([, val]) => `${val.toString().padStart(2, "0")}`)
    .join(":");
};

const EpisodesTable = ({ episodes, podcastId }: Props) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left">Title</th>
          <th className="text-left px-2">Date</th>
          <th className="text-left px-2">Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode) => (
          <tr className="h-8 even:bg-gray-50 odd:bg-white" key={episode.id}>
            <td>
              <Link
                className="text-blue-400"
                to={`/podcast/${podcastId}/episode/${episode.id}`}
              >
                {episode.title}
              </Link>
            </td>
            <td className="px-2">{format(episode.date, "dd/MM/yyy")}</td>
            <td className="px-2">
              {typeof episode.duration === "number"
                ? formatDuration(episode.duration)
                : "N/S"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EpisodesTable;
