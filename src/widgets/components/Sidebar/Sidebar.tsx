import { FC, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import { Nav } from "../../../entities";

interface Props {
  isActive: boolean;
}

export const Sidebar: FC<Props> = ({ isActive }): JSX.Element => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.sidebar} ${isActive && styles.active}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.content}>
        <div className={styles.user}>
          <img src="/user.png" alt="user" />
        </div>
        <Nav />
      </div>
    </div>
  );
};
