import { FC } from "react";
import styles from "./ISearch.module.scss";

export const ISearch: FC = (): JSX.Element => {
  return (
    <label className={styles.search}>
      <img src="/navbar/search.svg" alt="" />
      <div>
        <input type="text" placeholder="Поиск" />
      </div>
    </label>
  );
};
