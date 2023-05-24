import { Dispatch, FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  type?: "password" | "email" | "text" | "tel" | "textarea";
  placholder?: string;
  value?: string;
  setValue?: Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({
  type = "text",
  placholder,
  value,
  setValue,
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

    case "textarea":
      return (
        <label className={`${styles.label} ${styles.default}`}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <textarea
              placeholder={placholder ? placholder : "Сообщения..."}
              value={value}
              onChange={(e) => setValue && setValue(String(e.target.value))}
            />
          </div>
          <img style={{ opacity: 1 }} src="/chat/2.svg" alt="..." />
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
