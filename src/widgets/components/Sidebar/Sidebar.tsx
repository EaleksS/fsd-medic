import { FC, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import { Text } from "../../../shared";

interface Props {
  isActive: boolean;
}

export const Sidebar: FC<Props> = ({ isActive }): JSX.Element => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.sidebar} ${isActive && styles.active}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.content}>
        <div className={styles.user}>
          <img src="/user.png" alt="user" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <div className={styles.line}></div>
              <img src="/nav/profile.svg" alt="profile" />
              <Text type="h3" fw="500">
                Аккаунт
              </Text>
            </li>
            <li>
              <div className={styles.line}></div>

              <img src="/nav/entries.svg" alt="profile" />
              <Text type="h3" fw="500">
                Записи
              </Text>
            </li>
            <li>
              <div className={styles.line}></div>

              <img src="/nav/mcard.svg" alt="profile" />
              <Text type="h3" fw="500">
                Медицинская карта
              </Text>
            </li>
            <li>
              <div className={styles.line}></div>

              <img src="/nav/geo.svg" alt="profile" />
              <Text type="h3" fw="500">
                Местоположение
              </Text>
            </li>
            <li>
              <div className={styles.line}></div>
              <img src="/nav/settings.svg" alt="profile" />
              <Text type="h3" fw="500">
                Настройки
              </Text>
              <div className={styles.line_bottom}></div>
            </li>
            <li className={styles.logout}>
              <div className={styles.line}></div>
              <img src="/nav/logout.svg" alt="logout" />
              <Text type="h3" fw="500">
                Выход
              </Text>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
