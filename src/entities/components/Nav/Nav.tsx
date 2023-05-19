import { FC } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { useNavigate } from "react-router-dom";

export const Nav: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <ul>
        <li onClick={() => navigate("/account")}>
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
        <li onClick={() => navigate("/map")}>
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
  );
};
