import { FC, ReactNode, useState } from "react";
import styles from "./Layout.module.scss";
import { NavBar } from "../NavBar/NavBar";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { useWindowDimensions } from "../../../shared";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.wrapper} onClick={handleClose}>
      {width < 1400 && <Header setIsActive={setIsActive} />}
      <Sidebar isActive={isActive} />
      {children}
      <NavBar />
    </div>
  );
};
