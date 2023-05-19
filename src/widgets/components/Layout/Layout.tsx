import { FC, ReactNode, useState } from "react";
import styles from "./Layout.module.scss";
import { NavBar } from "../NavBar/NavBar";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.wrapper} onClick={handleClose}>
      <Header setIsActive={setIsActive} />
      <Sidebar isActive={isActive} />
      {children}
      <NavBar />
    </div>
  );
};
