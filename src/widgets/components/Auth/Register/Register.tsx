import { FC, useState } from "react";
import styles from "./Register.module.scss";
import { Button, Input, Loader, Text } from "../../../../shared";
import { Link } from "react-router-dom";

export const Register: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className={styles.register}>
      <Text type="h1">Регистрация</Text>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input type="tel" />
        <Input type="email" />
        <Input type="password" placholder="Придумайте пароль" />
        <Input type="password" placholder="Повторите пароль" />

        <Button type="primary" onClick={() => setIsLoading((prev) => !prev)}>
          {isLoading ? <Loader w={40} h={40} /> : "Зарегистрироваться"}
        </Button>
        <Text type="h5">
          Уже имеется аккаунт? <Link to="/auth/login">Войти</Link>
        </Text>
      </form>
      <div className={styles.social}>
        <img src="/social/google.svg" alt="" />
        <img src="/social/apple.svg" alt="" />{" "}
        <img src="/social/Facebook.svg" alt="" />
      </div>
    </div>
  );
};
