import { FC } from "react";
import styles from "./MedicCard.module.scss";
import { Layout } from "../../widgets";
import { ISearch, Text } from "../../shared";
import { AiOutlinePlus } from "react-icons/ai";

export const MedicCard: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.medic_card}>
        <div className={styles.nav}>
          <ISearch />
          <div className={styles.block}>
            <AiOutlinePlus />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.month}>
            Март <img src="/post/pereslat.svg" alt="pereslat" />
          </div>
          <div className={styles.year}>
            2023 <img src="/post/pereslat.svg" alt="pereslat" />
          </div>
        </div>
        <div className={styles.items}>
          {[1, 2, 3, 4, 5].map((e) => (
            <div key={e} className={styles.item}>
              <div className={styles.content}>
                <div className={styles.datetime}>
                  <Text type="h3">Вт</Text>
                  <div className={styles.day}>02</div>
                </div>
                <div className={styles.title}>
                  <Text type="h1">Название</Text>
                  <Text type="h5">Краткое описание</Text>
                  <Text>Комментарии выкл</Text>
                </div>
              </div>
              <div className={styles.view}>
                <img src="/post/pereslat.svg" alt="pereslat" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
