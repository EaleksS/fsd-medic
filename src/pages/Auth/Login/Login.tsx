import { FC } from "react";
import { Login } from "../../../widgets";
import styles from "./Login.module.scss";

export const LoginPage: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};
