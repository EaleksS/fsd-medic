import { FC } from "react";
import styles from "./CenterCard.module.scss";
import { Rating } from "../../../features";

export const CenterCard: FC = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
        alt="img"
      />
      <div className={styles.rating}>
        <div className={styles.stars}>
          <Rating rating={3} />
        </div>
        <div className={styles.count}>3.0</div>
      </div>
      <div className={styles.info}>
        <nav>
          <ul>
            <li>Название: Описание</li>
            <li>Город: Описание</li>
            <li>Колл-во врачей: Описание</li>
          </ul>
        </nav>
        <div className={styles.view}>
          <img src="/post/pereslat.svg" alt="pereslat" />
        </div>
      </div>
    </div>
  );
};
