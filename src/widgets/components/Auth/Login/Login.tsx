import { FC } from "react";
import styles from "./Login.module.scss";
import { Button, Input, Text } from "../../../../shared";
import { Link } from "react-router-dom";

export const Login: FC = (): JSX.Element => {
  return (
    <div className={styles.login}>
      <Text type="h1">Войти</Text>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input type="email" />
        <Input type="password" />

        <Link to=".#" className={styles.z_pass}>
          Забыли пароль
        </Link>
        <Button type="primary">Войти</Button>
        <Text type="h5">
          Нет учетной записи?
          <Link to="/auth/register"> Зарегистрироваться</Link>
        </Text>
      </form>
      <div className={styles.or}>
        <div className={styles.title}>
          <div className={styles.line}></div>
          <Text type="h5">Или</Text>
          <div className={styles.line}></div>
        </div>
        <div className={styles.social}>
          <Button type="social">
            <img src="/social/google.svg" alt="" /> Войти с помощью Google
          </Button>
          <Button type="social">
            <img src="/social/apple.svg" alt="" /> Войти с помощью Apple
          </Button>
          <Button type="social">
            <img src="/social/Facebook.svg" alt="" /> Войти с помощью Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};
