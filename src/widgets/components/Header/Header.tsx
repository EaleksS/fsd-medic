import { Dispatch, FC } from "react";
import styles from "./Header.module.scss";

interface Props {
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
  setIsActiveFilters: Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<Props> = ({
  setIsActive,
  setIsActiveFilters,
}): JSX.Element => {
  return (
    <header className={styles.header}>
      <div
        className={styles.user}
        onClick={(e) => {
          e.stopPropagation();
          setIsActiveFilters(false);
          setIsActive((prev) => !prev);
        }}
      >
        <img src="/burger.svg" alt="menu" />
      </div>
      <div
        className={styles.filter}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(false);
          setIsActiveFilters((prev) => !prev);
        }}
      >
        <img src="/filters.svg" alt="filters" />
      </div>
    </header>
  );
};
