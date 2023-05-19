import { FC, useState } from "react";
import styles from "./NavBar.module.scss";
import { Extra } from "../../../entities";
import { Blur } from "../../../shared";

export const NavBar: FC = (): JSX.Element => {
  const [selectMenu, setSelectMenu] = useState<string>("home");
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <Blur isActive={isActive} setIsActive={setIsActive} />
      <div className={styles.nav_bar}>
        <nav className={styles.nav} onClick={() => setIsActive(false)}>
          <div
            className={`${selectMenu === "home" && styles.active}`}
            onClick={() => setSelectMenu("home")}
          >
            <img src="/navbar/home.svg" alt="home" />
          </div>
          <div
            className={`${selectMenu === "mess" && styles.active}`}
            onClick={() => setSelectMenu("mess")}
          >
            <img src="/navbar/mess.svg" alt="mess" />
          </div>
          <div
            className={`${selectMenu === "search" && styles.active}`}
            onClick={() => setSelectMenu("search")}
          >
            <img src="/navbar/search.svg" alt="search" />
          </div>
        </nav>
        <Extra isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
};
