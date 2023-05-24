import { Dispatch, FC } from "react";
import styles from "./Header.module.scss";

interface Props {
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<Props> = ({ setIsActive }): JSX.Element => {
  return (
    <header className={styles.header}>
      <div
        className={styles.user}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive((prev) => !prev);
        }}
      >
        <img src="/burger.svg" alt="menu" />
      </div>
    </header>
  );
};
