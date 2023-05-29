import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import { NavBar } from "../NavBar/NavBar";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Blur, useWindowDimensions } from "../../../shared";
import { Extra } from "../../../entities";
import { Filters } from "../Filters/Filters";

interface Props {
  children: ReactNode;
  nowrapp?: boolean;
  noside?: boolean;
  nomenu?: boolean;
  noheader?: boolean;
  filters?: boolean;
}

export const Layout: FC<Props> = ({
  children,
  nowrapp = false,
  noheader = false,
  nomenu = false,
  noside = false,
  filters = false,
}): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveFilters, setIsActiveFilters] = useState<boolean>(false);
  const [isActiveExtra, setIsActiveExtra] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const handleClose = () => {
    setIsActiveFilters(false);
    setIsActive(false);
  };

  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageUrl(window.location.pathname);
    }, 0);
  }, []);

  return (
    <div className={!nowrapp ? styles.wrapper : ""} onClick={handleClose}>
      {width < 1400 && !noheader && (
        <Header
          setIsActive={setIsActive}
          setIsActiveFilters={setIsActiveFilters}
        />
      )}

      {!noside && <Sidebar isActive={isActive} />}

      {pageUrl === "/" && !filters && <Filters isActive={isActiveFilters} />}

      {children}

      {!nomenu && width < 800 ? (
        <NavBar />
      ) : (
        <>
          <div className={styles.extra}>
            <Extra isActive={isActiveExtra} setIsActive={setIsActiveExtra} />
          </div>
          <Blur isActive={isActiveExtra} setIsActive={setIsActiveExtra} />
        </>
      )}

      {!filters && width > 800 && (
        <button
          className={styles.filters}
          onClick={(e) => {
            e.stopPropagation();
            setIsActiveFilters((prev) => !prev);
          }}
        >
          Фильтры
        </button>
      )}
    </div>
  );
};
