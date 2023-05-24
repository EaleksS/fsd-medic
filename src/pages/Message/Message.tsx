import { FC, useState } from "react";
import { Calls, Layout, Messages } from "../../widgets";
import styles from "./Message.module.scss";
import { ISearch } from "../../shared";

export const MessagePage: FC = (): JSX.Element => {
  const [select, setSelect] = useState("message");

  return (
    <Layout>
      <div className={styles.nav}>
        <button
          className={`${select === "message" && styles.active}`}
          onClick={() => setSelect("message")}
        >
          Сообщения
        </button>
        <button
          className={`${select === "calls" && styles.active}`}
          onClick={() => setSelect("calls")}
        >
          Звонки
        </button>
      </div>
      <div style={{ padding: "1rem 1rem" }}>
        <ISearch />
      </div>
      <div className={styles.content}>
        {select === "message" ? <Messages /> : <Calls />}
      </div>
    </Layout>
  );
};
