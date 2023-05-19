import { FC } from "react";
import styles from "./Header.module.scss";
import { Text } from "../../../shared";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.user}>
        <img src="/user.png" alt="user" />
        <Text type="h1">asinast.petro</Text>
      </div>
    </header>
  );
};
