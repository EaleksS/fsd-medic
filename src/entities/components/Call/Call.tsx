import { FC } from "react";
import styles from "./Call.module.scss";
import { Text } from "../../../shared";

export const Call: FC = (): JSX.Element => {
  return (
    <div className={styles.call}>
      <div className={styles.user}>
        <img className={styles.call} src="/call.svg" alt="call" />
        <img src="/user.png" alt="user" />
        <div className={styles.desc}>
          <Text type="h3">Александр Петров</Text>
          <Text type="p">Исходящий (30 мин)</Text>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.datetime}>2:23</div>
        <div className={styles.btn}>
          <img src="/info.svg" alt="info" />
        </div>
      </div>
    </div>
  );
};
