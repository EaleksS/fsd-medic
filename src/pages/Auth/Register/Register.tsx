import { FC } from "react";
import { Register } from "../../../widgets";
import styles from "./Register.module.scss";

export const RegisterPage: FC = () => {
  return (
    <div className={styles.container}>
      <Register />
    </div>
  );
};
