import { FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  type?: "password" | "email" | "text" | "tel";
  placholder?: string;
}

export const Input: FC<Props> = ({
  type = "text",
  placholder,
}): JSX.Element => {
  switch (type) {
    case "email":
      return (
        <label className={styles.label}>
          <img src="/navbar/mess.svg" alt="" />
          <div>
            <input
              type="email"
              placeholder={
                placholder ? placholder : "Введите тел.номер или эл.почту"
              }
            />
          </div>
        </label>
      );

    case "password":
      return (
        <label className={styles.label}>
          <img src="/navbar/pass.svg" alt="" />
          <div>
            <input
              type="password"
              placeholder={placholder ? placholder : "Введите пароль"}
            />
          </div>
        </label>
      );

    case "tel":
      return (
        <label className={styles.label}>
          <img src="/navbar/tel.svg" alt="" />
          <div>
            <input
              type="tel"
              placeholder={placholder ? placholder : "Введите тел.номер"}
            />
          </div>
        </label>
      );

    default:
      return (
        <label className={`${styles.label} ${styles.default}`}>
          <div>
            <input
              type="text"
              placeholder={placholder ? placholder : "Текст"}
            />
          </div>
        </label>
      );
  }
};
