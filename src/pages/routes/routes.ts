import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
