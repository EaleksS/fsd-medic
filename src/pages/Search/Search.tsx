import { FC, useState } from "react";
import { Layout } from "../../widgets";
import styles from "./Search.module.scss";
import { ISearch } from "../../shared";
import { CenterCard } from "../../entities";

export const SearchPage: FC = (): JSX.Element => {
  const [select, setSelect] = useState("center");

  return (
    <Layout>
      <div className={styles.search}>
        {/* <div className={styles.back}>{"<"}</div> */}
        <ISearch />
      </div>
      <div className={styles.nav}>
        <button
          className={`${select === "center" && styles.active}`}
          onClick={() => setSelect("center")}
        >
          Центры
        </button>
        <button
          className={`${select === "clinic" && styles.active}`}
          onClick={() => setSelect("clinic")}
        >
          Клиники
        </button>
      </div>

      <div className={styles.cards}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
          <CenterCard key={e} />
        ))}
      </div>
    </Layout>
  );
};
