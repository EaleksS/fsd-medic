import { FC } from "react";
import styles from "./Recovery.module.scss";
import { Recovery } from "../../../widgets";

export const RecoveryPage: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Recovery />
    </div>
  );
};
