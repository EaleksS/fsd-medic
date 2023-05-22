import { FC } from "react";
import styles from "./Messages.module.scss";
import { Message } from "../../../entities";

export const Messages: FC = (): JSX.Element => {
  return (
    <div className={styles.messages}>
      {[0, 1, 2, 3, 4].map((e) => (
        <Message key={e} />
      ))}
    </div>
  );
};
