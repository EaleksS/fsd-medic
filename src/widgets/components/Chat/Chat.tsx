import { FC, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { Input, Text } from "../../../shared";
import { Mess, Modal } from "../../../entities";
import { BsThreeDots } from "react-icons/bs";

export const Chat: FC = (): JSX.Element => {
  // Плавный переход
  const [renderScroll] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  function scrollToMyElement() {
    bottomRef.current?.scrollIntoView(true);
  }

  useEffect(() => {
    scrollToMyElement();
  }, [renderScroll]);
  // /Плавный переход

  const [value, setValue] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={styles.chat}>
      <header className={styles.header} onClick={() => setIsActive(true)}>
        <img src="/user.png" alt="user" />
        <div className={styles.title}>
          <Text type="h1">Александр Петров</Text>
          <Text>Онлайн</Text>
        </div>
        <img src="/call.svg" alt="call" onClick={(e) => e.stopPropagation()} />
      </header>
      <div className={styles.content}>
        <Text>Четверг, 12 мая</Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => (
          <Mess key={e} id={e} />
        ))}
        <div className={styles.b} ref={bottomRef}></div>
      </div>
      <footer className={styles.footer}>
        <img src="/chat/1.svg" alt="..." />
        <div className={styles.input}>
          <Input type="textarea" setValue={setValue} value={value} />
        </div>
        {value ? (
          <img src="/chat/send.svg" alt="..." />
        ) : (
          <img src="/chat/3.svg" alt="..." />
        )}
      </footer>
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <BsThreeDots className={styles.dots} />
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
    </div>
  );
};
