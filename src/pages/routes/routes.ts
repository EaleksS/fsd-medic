import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { SearchPage } from "../Search/Search";
import { MessagePage } from "../Message/Message";
import { MapPage } from "../Map/Map";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/search", Component: SearchPage, key: "search_page" },
  { path: "/message", Component: MessagePage, key: "message_page" },
  { path: "/map", Component: MapPage, key: "map_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
