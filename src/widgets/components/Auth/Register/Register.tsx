import { FC } from "react";
import styles from "./Register.module.scss";
import { Button, Input, Text } from "../../../../shared";
import { Link } from "react-router-dom";

export const Register: FC = (): JSX.Element => {
  return (
    <div className={styles.register}>
      <Text type="h1">Регистрация</Text>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input type="tel" />
        <Input type="email" />
        <Input type="password" placholder="Придумайте пароль" />
        <Input type="password" placholder="Повторите пароль" />

        <Button type="primary">Зарегистрироваться</Button>
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
