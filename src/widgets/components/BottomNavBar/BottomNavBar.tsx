import { FC, useState } from "react";
import styles from "./BottomNavBar.module.scss";

export const BottomNavBar: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={styles.nav_bar}>
      <nav className={styles.nav}>
        <img src="/navbar/home.svg" alt="home" />
        <img src="/navbar/mess.svg" alt="mess" />
        <img src="/navbar/search.svg" alt="search" />
      </nav>
      <div className={styles.extra}>
        <div
          className={`${styles.btn} ${isActive && styles.active}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsActive((prev) => !prev);
          }}
        >
          <img src="/extra/phone.svg" alt="phone" className={styles.phone} />
          <img src="/extra/plus.svg" alt="plus" className={styles.plus} />
        </div>
      </div>
    </div>
  );
};
