import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContainerProvider } from "@Shared/infrastructure/ui/context/ContainerContext";
import queryClient from "@Shared/infrastructure/services/client";

const App = () => (
  <ContainerProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ContainerProvider>
);

export default App;
