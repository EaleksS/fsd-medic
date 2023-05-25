import { FC, useState } from "react";
import { Calls, Chat, Layout, Messages } from "../../widgets";
import styles from "./Message.module.scss";
import { ISearch, useWindowDimensions } from "../../shared";

export const MessagePage: FC = (): JSX.Element => {
  const [select, setSelect] = useState("message");
  const [isActive, setIsActive] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  return (
    <Layout nowrapp noheader={isActive} nomenu={isActive} noside={isActive}>
      <div className={styles.container}>
        {!isActive && (
          <div>
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
            <div
              className={styles.content}
              onClick={() => width < 800 && setIsActive(true)}
            >
              {select === "message" ? <Messages /> : <Calls />}
            </div>
          </div>
        )}

        {(width > 800 || isActive) && (
          <div className={styles.chat}>
            <Chat />
          </div>
        )}
      </div>
    </Layout>
  );
};
