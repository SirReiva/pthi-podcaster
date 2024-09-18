import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className="rounded-md shadow-lg p-6">{children}</div>;
};

export default Card;
