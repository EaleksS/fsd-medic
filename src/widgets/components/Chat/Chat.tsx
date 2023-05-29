import { FC, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import { Input, Text } from "../../../shared";
import { Mess } from "../../../entities";
import { ModalChat } from "./Modal/Modal";

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
        <div className={styles.title}>
          <img src="/user.png" alt="user" />
          <div>
            <Text type="h1">Александр Петров</Text>
            <Text>Онлайн</Text>
          </div>
        </div>
        <img src="/call.svg" alt="call" className={styles.phone} onClick={(e) => e.stopPropagation()} />
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
      <ModalChat isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};
