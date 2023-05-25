import { FC } from "react";
import { Layout, Post, TopDoctor } from "../../widgets";
import styles from "./Main.module.scss";
import { ISearch } from "../../shared";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.nav}>
        <ISearch />
        <div className={`${styles.block} ${styles.noti}`}>
          <IoNotificationsOutline />
        </div>
        <div className={styles.block}>
          <HiOutlineEnvelope />
        </div>
      </div>
      {[1, 2, 3, 4, 5].map((e) => (
        <Post key={e} />
      ))}
      <TopDoctor />
    </Layout>
  );
};
