import { FC } from "react";
import styles from "./TopDoctor.module.scss";
import { Text } from "../../../shared";
import { DoctorCard } from "../../../entities";

export const TopDoctor: FC = (): JSX.Element => {
  return (
    <div className={styles.top}>
      <div className={styles.nav}>
        <Text type="h5">
          <span>Топ врачи</span>
        </Text>
        <Text type="h5">
          <span>Все</span>
        </Text>
      </div>
      <div className={styles.doctors}>
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
};
