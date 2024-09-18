import { useContext } from "react";
import { containerContext } from "../context/ContainerContext";
import { Token } from "@Shared/infrastructure/di/di-container";

export const useContainer = <T>(token: Token<T>): T => {
  const continer = useContext(containerContext);

  return continer.resolve(token);
};
