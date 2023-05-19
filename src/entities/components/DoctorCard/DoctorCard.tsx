import { FC } from "react";
import styles from "./DoctorCard.module.scss";
import { Text } from "../../../shared";
import { Rating } from "../../../features";

export const DoctorCard: FC = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <img
        src="https://www.watson.de/imgdb/e680/Qx,A,0,0,3800,2533,1583,1055,633,422/2495441180051298"
        alt="doctor"
      />
      <div className={styles.content}>
        <Text type="h5">Александр Петров</Text>
        <Text type="h4" fz="10px">
          Хирург
        </Text>
        <div className={styles.info}>
          <Rating rating={4.5} />
          <img src="/post/pereslat.svg" alt="pereslat" />
        </div>
      </div>
    </div>
  );
};
