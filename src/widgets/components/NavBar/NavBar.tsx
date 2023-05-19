import { FC, useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import { Extra } from "../../../entities";
import { Blur } from "../../../shared";
import { useNavigate } from "react-router-dom";

export const NavBar: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [pageUrl, setPageUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setPageUrl(window.location.pathname);
    }, 0);
  }, []);

  return (
    <>
      <Blur isActive={isActive} setIsActive={setIsActive} />
      <div className={styles.nav_bar}>
        <nav className={styles.nav} onClick={() => setIsActive(false)}>
          <div
            className={`${pageUrl === "/" && styles.active}`}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/navbar/home.svg" alt="home" />
          </div>
          <div
            className={`${pageUrl === "/message" && styles.active}`}
            onClick={() => {
              navigate("/message");
            }}
          >
            <img src="/navbar/mess.svg" alt="mess" />
          </div>
          <div
            className={`${pageUrl === "/search" && styles.active}`}
            onClick={() => {
              navigate("/search");
            }}
          >
            <img src="/navbar/search.svg" alt="search" />
          </div>
        </nav>
        <Extra isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
};
