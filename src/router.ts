import SearchPage from "@Podcaster/infrastructure/ui/pages/SearchPage";
import EpisodePage from "@Podcaster/infrastructure/ui/pages/EpisodePage";
import PodcastPage from "@Podcaster/infrastructure/ui/pages/PodcastPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@Shared/infrastructure/ui/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: SearchPage,
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        Component: EpisodePage,
      },
      {
        path: "podcast/:podcastId",
        Component: PodcastPage,
      },
    ],
  },
]);

export default router;
