import { RouteProps } from "react-router-dom";

export type RouteData = Pick<RouteProps, "path" | "Component"> & {
  key: string;
};
