import { FC } from "react";
import styles from "./Message.module.scss";
import { Text } from "../../../shared";

export const Message: FC = (): JSX.Element => {
  return (
    <div className={styles.message}>
      <div className={styles.user}>
        <img src="/user.png" alt="user" />
        <div className={styles.desc}>
          <Text type="h3">Александр Петров</Text>
          <Text type="p">Сообщения</Text>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.notifications}>4</div>
        <div className={styles.datetime}>2:23</div>
      </div>
    </div>
  );
};
