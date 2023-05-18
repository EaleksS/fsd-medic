import { Route, Routes } from "react-router-dom";
import "./styles/_variables.scss";
import { Routing } from "./providers/Routing";
import { routes } from "../pages";
import "./styles/reset.min.css";
import { PSuspense } from "./providers/Suspense";

export const App = () => {
  return (
    <PSuspense>
      <Routing>
        <Routes>
          {routes.map((e) => (
            <Route {...e} />
          ))}
        </Routes>
      </Routing>
    </PSuspense>
  );
};
