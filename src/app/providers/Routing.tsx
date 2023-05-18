import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const Routing: FC<Props> = ({ children }): JSX.Element => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
