import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import {NavBar } from "../NavBar/NavBar";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {children}
      <NavBar />
    </div>
  );
};
