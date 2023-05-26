import { FC } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { useNavigate } from "react-router-dom";

export const Nav: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <ul>
        <li onClick={() => navigate("/")}>
          <div className={styles.line}></div>
          <img src="/navbar/home.svg" alt="profile" />
          <Text type="h3" fw="500">
            Главная
          </Text>
        </li>
        <li onClick={() => navigate("/search")}>
          <div className={styles.line}></div>
          <img src="/navbar/search.svg" alt="profile" />
          <Text type="h3" fw="500">
            Поиск
          </Text>
        </li>
        <li onClick={() => navigate("/message")}>
          <div className={styles.line}></div>
          <img src="/navbar/mess.svg" alt="profile" />
          <Text type="h3" fw="500">
            Сообщение
          </Text>
        </li>
        <li onClick={() => navigate("/account")}>
          <div className={styles.line}></div>
          <img src="/nav/profile2.svg" alt="profile" />
          <Text type="h3" fw="500">
            Аккаунт
          </Text>
        </li>
        <li>
          <div className={styles.line}></div>

          <img src="/nav/entries2.svg" alt="profile" />
          <Text type="h3" fw="500">
            Записи
          </Text>
        </li>
        <li>
          <div className={styles.line}></div>

          <img src="/nav/mcard2.svg" alt="profile" />
          <Text type="h3" fw="500">
            Медицинская карта
          </Text>
        </li>
        <li onClick={() => navigate("/map")}>
          <div className={styles.line}></div>

          <img src="/nav/geo2.svg" alt="profile" />
          <Text type="h3" fw="500">
            Местоположение
          </Text>
        </li>
        <li>
          <div className={styles.line}></div>
          <img src="/nav/settings2.svg" alt="profile" />
          <Text type="h3" fw="500">
            Настройки
          </Text>
        </li>
        <li>
          <div className={styles.line}></div>
          <img src="/nav/logout2.svg" alt="logout" />
          <Text type="h3" fw="500">
            Выход
          </Text>
        </li>
      </ul>
    </nav>
  );
};
