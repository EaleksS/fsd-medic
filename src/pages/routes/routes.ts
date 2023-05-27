import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { SearchPage } from "../Search/Search";
import { MessagePage } from "../Message/Message";
import { MapPage } from "../Map/Map";
import { LoginPage } from "../Auth/Login/Login";
import { RegisterPage } from "../Auth/Register/Register";
import { RecoveryPage } from "../Auth/Recovery/Recovery";
import { AccountPage } from "../Account/Account";
import { MessageID } from "../Message/MessageID/MessageID";
import { Entries } from "../Entries/Entries";
import { MedicCard } from "../MedicCard/MedicCard";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/search", Component: SearchPage, key: "search_page" },
  { path: "/message", Component: MessagePage, key: "message_page" },
  { path: "/message/:id", Component: MessageID, key: "message_id_page" },
  { path: "/map", Component: MapPage, key: "map_page" },
  { path: "/entries", Component: Entries, key: "entries_page" },
  { path: "/medic-card", Component: MedicCard, key: "medic-card_page" },
  { path: "/auth/login", Component: LoginPage, key: "login_page" },
  { path: "/auth/register", Component: RegisterPage, key: "register_page" },
  { path: "/auth/recovery", Component: RecoveryPage, key: "recovery_page" },
  { path: "/account", Component: AccountPage, key: "account_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
