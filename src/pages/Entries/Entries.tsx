import { FC, useState } from "react";
import styles from "./Entries.module.scss";
import { Layout } from "../../widgets";
import { ISearch } from "../../shared";
import { AiOutlinePlus } from "react-icons/ai";

export const Entries: FC = (): JSX.Element => {
  const [select, setSelect] = useState<string>("name");

  return (
    <Layout>
      <div className={styles.entries}>
        <div className={styles.nav}>
          <ISearch />
          <div className={styles.block}>
            <AiOutlinePlus />
          </div>
        </div>
        <div className={styles.selects}>
          <button
            className={`${select === "name" && styles.active}`}
            onClick={() => setSelect("name")}
          >
            Предстоящие
          </button>
          <button
            className={`${select === "tel" && styles.active}`}
            onClick={() => setSelect("tel")}
          >
            История
          </button>
        </div>
        <div className={styles.items}>
          {[1, 2, 3, 4, 5].map((e) => (
            <div key={e} className={styles.item}>
              
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
