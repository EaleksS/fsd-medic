import { FC, useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { Nav } from "../../../entities";
import { RadioBtn, Text, useWindowDimensions } from "../../../shared";

interface Props {
  isActive: boolean;
}

export const Sidebar: FC<Props> = ({ isActive }): JSX.Element => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1400) {
      document.body.style.overflowY = "auto";
      return;
    }

    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive, width]);

  const [isActiveRadio, setIsActiveRadio] = useState(false);

  return (
    <div
      className={`${styles.sidebar} ${
        (width > 1400 || isActive) && styles.active
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.content}>
        <div className={styles.user}>
          <img src="/user.png" alt="user" />
        </div>
        <div className={styles.lives}>
          <Text type="h5">Состояние:</Text>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className={styles.live}>
              <img
                src="/nav/hearth.svg"
                alt="hearth"
                style={!isActiveRadio ? { opacity: 0.5 } : {}}
              />
              <div className={styles.dropinfo}>
                <Text type="h5">
                  Состояние <span style={{ color: "green" }}>“Здоров”</span>
                </Text>
                <Text>Данный статус, говорит о состоянии человека</Text>
              </div>
            </div>
            <RadioBtn isActive={isActiveRadio} setIsActive={setIsActiveRadio} />
            <div className={styles.live}>
              <img
                src="/nav/virus.svg"
                alt="hearth"
                style={isActiveRadio ? { opacity: 0.5 } : {}}
              />
              <div className={`${styles.dropinfo} ${styles.dropinfo_v}`}>
                <Text type="h5">
                  Состояние <span style={{ color: "red" }}>“Болен”</span>
                </Text>
                <Text>Данный статус, говорит о состоянии человека</Text>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
