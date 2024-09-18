import container from "@Shared/infrastructure/di";
import { createContext, ReactNode } from "react";

export const containerContext = createContext(container);

type Props = {
  children?: ReactNode;
};

export const ContainerProvider = ({ children }: Props) => {
  return (
    <containerContext.Provider value={container}>
      {children}
    </containerContext.Provider>
  );
};
