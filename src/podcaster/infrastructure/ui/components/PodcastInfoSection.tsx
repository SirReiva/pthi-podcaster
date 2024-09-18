import { PodcastModel } from "@Podcaster/domain/models/podcast.model";

type Props = {
  podcast: PodcastModel;
};

const PodcastInfoSection = ({ podcast }: Props) => (
  <div className="flex flex-col w-full gap-4">
    <img className="w-48 self-center" src={podcast.image} />
    <hr />
    <h3 className="font-bold">{podcast.title}</h3>
    <p className="italic">by {podcast.author}</p>
    <hr />
    <p className="font-semibold">Description:</p>
    <p className="italic">{podcast.description}</p>
  </div>
);

export default PodcastInfoSection;
