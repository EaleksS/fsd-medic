import { FC, ReactNode, useState } from "react";
import styles from "./Layout.module.scss";
import { NavBar } from "../NavBar/NavBar";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { useWindowDimensions } from "../../../shared";

interface Props {
  children: ReactNode;
  nowrapp?: boolean;
  noside?: boolean;
  nomenu?: boolean;
  noheader?: boolean;
}

export const Layout: FC<Props> = ({
  children,
  nowrapp = false,
  noheader = false,
  nomenu = false,
  noside = false,
}): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className={!nowrapp ? styles.wrapper : ""} onClick={handleClose}>
      {width < 1400 && !noheader && <Header setIsActive={setIsActive} />}
      {!noside && <Sidebar isActive={isActive} />}
      {children}
      {!nomenu && <NavBar />}
    </div>
  );
};
