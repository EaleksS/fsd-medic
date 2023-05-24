import { FC, useState } from "react";
import { Modal } from "../../../../entities";
import { BsThreeDots } from "react-icons/bs";
import styles from "./Modal.module.scss";
import { Text } from "../../../../shared";

interface Props {
  isActive: boolean;
  setIsActive: (bool: boolean) => void;
}

export const ModalChat: FC<Props> = ({
  isActive,
  setIsActive,
}): JSX.Element => {
  const [isActiveSettings, setIsActiveSettings] = useState<boolean>(false);

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div
        className={styles.dots}
        onClick={() => setIsActiveSettings((prev) => !prev)}
      >
        <BsThreeDots />

        <ul
          className={`${styles.settings} ${isActiveSettings && styles.active}`}
        >
          <li>
            <img src="/chat/zablock.svg" alt="zablock" /> Заблокировать
          </li>
          <li>
            <img src="/chat/warning.svg" alt="warning" /> Пожаловаться
          </li>
          <li>
            <img src="/chat/delete.svg" alt="delete" /> Очистить чат
          </li>
        </ul>
      </div>

      <div className={styles.user}>
        <img src="/user.png" alt="user" />
        <div className={styles.text}>
          <Text type="h1" fz="24px">
            Александр Петров
          </Text>
          <Text type="h2">
            <span style={{ opacity: 0.5 }}>Онлайн</span>
          </Text>
        </div>
      </div>
      <div className={styles.info_block}>
        <Text>Информация</Text>
        <Text type="h3" mt="1rem">
          Специальность: <span style={{ fontWeight: 400 }}>Хирург</span>
        </Text>
        <Text type="h3" mt=".3rem">
          Числится: <span style={{ fontWeight: 400 }}>Описание</span>
        </Text>
        <Text type="h3" mt=".3rem">
          Опыт работы: <span style={{ fontWeight: 400 }}>5 лет</span>
        </Text>
      </div>
      <div className={styles.nav}>
        <Text type="h4">Медия</Text>
        <Text type="h4">Файлы</Text>
        <Text type="h4">Голос</Text>
        <Text type="h4">Ссылки</Text>
      </div>
      <div className={styles.items}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </Modal>
  );
};
