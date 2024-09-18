import { PodcastModel } from "@Podcaster/domain/models/podcast.model";
import { Link } from "react-router-dom";

type Props = {
  podcast: PodcastModel;
};

const PodcastCard = ({ podcast }: Props) => (
  <Link className="flex" to={`/podcast/${podcast.id}`}>
    <article
      className="w-64 overflow-y-visible flex flex-col items-center p-4"
      key={podcast.id}
    >
      <div className="h-16 w-full flex justify-center">
        <img
          className="w-32 h-32 rounded-full absolute"
          src={podcast.image}
          alt={podcast.label}
        />
      </div>

      <div className="shadow-md flex flex-col rounded-md w-full grow justify-center items-center p-4 pt-16">
        <h3 className="font-bold text-center">{podcast.title}</h3>
        <p className="text-center text-gray-700">Author: {podcast.author}</p>
      </div>
    </article>
  </Link>
);

export default PodcastCard;
