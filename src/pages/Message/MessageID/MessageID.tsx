import { FC } from "react";
import styles from "./MessageID.module.scss";
import { Chat } from "../../../widgets";

export const MessageID: FC = (): JSX.Element => {
  return (
    <div className={styles.message_id}>
      <Chat />
    </div>
  );
};
