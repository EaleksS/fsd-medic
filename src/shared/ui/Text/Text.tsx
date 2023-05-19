import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface Props {
  children: ReactNode;
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  mt?: string;
  fz?: string | number;
  fw?: string;
  lh?: string | number;
}

export const Text: FC<Props> = ({
  children,
  type = "p",
  mt = "0",
  fz,
  fw,
  lh,
}): JSX.Element => {
  const styleComp: CSSProperties = {
    marginTop: mt,
    fontSize: fz,
    fontWeight: fw,
    lineHeight: lh,
  };

  switch (type) {
    case "h1":
      return (
        <h1 className={styles.h1} style={styleComp}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={styles.h2} style={styleComp}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={styles.h3} style={styleComp}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={styles.h4} style={styleComp}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={styles.h5} style={styleComp}>
          {children}
        </h5>
      );

    default:
      return (
        <p className={styles.p} style={styleComp}>
          {children}
        </p>
      );
  }
};
