import { Dispatch, FC } from "react";
import styles from "./Header.module.scss";
import { Text } from "../../../shared";

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
          setIsActive(true);
        }}
      >
        <img src="/user.png" alt="user" />
        <Text type="h1">asinast.petro</Text>
      </div>
    </header>
  );
};
