import { FC, useState } from "react";
import styles from "./Recovery.module.scss";
import { Button, Input, Loader, Text } from "../../../../shared";
import { Link } from "react-router-dom";

export const Recovery: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("name");

  return (
    <div className={styles.recovery}>
      <Text type="h1">Восстановление</Text>
      <div className={styles.title}>
        <Text type="h1">Не удается выполнить вход?</Text>
        <Text mt="1rem">
          Введите имя пользователя или электронный адрес, и мы отправим вам
          ссылку для восстановления доступа к аккаунту.
        </Text>
      </div>
      <div className={styles.nav}>
        <button
          className={`${select === "name" && styles.active}`}
          onClick={() => setSelect("name")}
        >
          Имя Пользователя
        </button>
        <button
          className={`${select === "tel" && styles.active}`}
          onClick={() => setSelect("tel")}
        >
          Телефон
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {select === "name" ? (
          <Input type="email" placholder="Введите эл.почту" />
        ) : (
          <Input type="tel" placholder="Введите телефон" />
        )}
        <Button type="primary" onClick={() => setIsLoading((prev) => !prev)}>
          {isLoading ? <Loader w={30} h={30} /> : "Отправить"}
        </Button>
        <Text type="h5">
          Уже имеется аккаунт? <Link to="/auth/login">Войти</Link>
        </Text>
      </form>
    </div>
  );
};
