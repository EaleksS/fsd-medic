import { FC } from "react";
import styles from "./Calls.module.scss";
import { Call } from "../../../entities";

export const Calls: FC = (): JSX.Element => {
  return (
    <div className={styles.calls}>
      {[0, 1, 2, 3, 4].map((e) => (
        <Call key={e} />
      ))}
    </div>
  );
};
