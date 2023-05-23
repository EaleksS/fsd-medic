import { FC } from "react";
import styles from "./RadioBtn.module.scss";

export const RadioBtn: FC = (): JSX.Element => {
  return (
    <div className={styles.radio}>
      <div className={styles.circle}></div>
    </div>
  );
};
