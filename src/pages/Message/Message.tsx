import { FC, useState } from "react";
import { Calls, Chat, Layout, Messages } from "../../widgets";
import styles from "./Message.module.scss";

export const MessagePage: FC = (): JSX.Element => {
  const [select, setSelect] = useState("message");
  const [isActive, setIsActive] = useState<boolean>(false);

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
      <div className={styles.content}>
        {select === "message" ? (
          <div onClick={() => setIsActive(true)}>
            <Messages />
          </div>
        ) : (
          <Calls />
        )}

        {isActive && <Chat />}
      </div>
    </Layout>
  );
};
