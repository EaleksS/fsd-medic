import { FC, useState } from "react";
import { Layout } from "../../widgets";
import styles from "./Search.module.scss";
import { ISearch, Text } from "../../shared";
import { CenterCard } from "../../entities";

export const SearchPage: FC = (): JSX.Element => {
  const [select, setSelect] = useState("center");

  return (
    <Layout>
      <div className={styles.nav}>
        <button
          className={`${select === "center" && styles.active}`}
          onClick={() => setSelect("center")}
        >
          <Text type="h2">Центры</Text>
        </button>
        <button
          className={`${select === "clinic" && styles.active}`}
          onClick={() => setSelect("clinic")}
        >
          <Text type="h2">Клиника</Text>
        </button>
      </div>
      <div className={styles.search}>
        <ISearch />
      </div>
      <div className={styles.cards}>
        {[0, 1].map((e) => (
          <CenterCard key={e} />
        ))}
      </div>
    </Layout>
  );
};
