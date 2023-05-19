import { Dispatch, FC, ReactNode } from "react";
import styles from "./Dropdown.module.scss";
import { Text } from "../..";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  name: JSX.Element;
  act_height: number;
}

export const Dropdown: FC<Props> = ({
  isActive,
  setIsActive,
  children,
  name,
  act_height,
}): JSX.Element => {
  return (
    <div
      className={`${styles.dropdown}`}
      style={isActive ? { height: act_height } : {}}
    >
      <div
        className={styles.title}
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <Text type="h2">{name}</Text>
        <div className={`${styles.arrow} ${isActive && styles.active}`}>
          {">"}
        </div>
      </div>
      <div className={styles.inputs}>{children}</div>
    </div>
  );
};
