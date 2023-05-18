import { FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface Props {
  children: ReactNode;
  type?: "p" | "h1" | "h2" | "h3" | "h4";
  mt?: string;
}

export const Text: FC<Props> = ({
  children,
  type = "p",
  mt = "0",
}): JSX.Element => {
  switch (type) {
    case "h1":
      return (
        <h1 className={styles.h1} style={{ marginTop: mt }}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={styles.h2} style={{ marginTop: mt }}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={styles.h3} style={{ marginTop: mt }}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={styles.h4} style={{ marginTop: mt }}>
          {children}
        </h4>
      );

    default:
      return (
        <p className={styles.p} style={{ marginTop: mt }}>
          {children}
        </p>
      );
  }
};
