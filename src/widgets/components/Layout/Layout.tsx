import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { BottomNavBar } from "../BottomNavBar/BottomNavBar";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {children}
      <BottomNavBar />
    </div>
  );
};
