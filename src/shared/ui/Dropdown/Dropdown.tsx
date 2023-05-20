import { Dispatch, FC, ReactNode } from "react";
import styles from "./Dropdown.module.scss";
import { Text } from "../..";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  name: JSX.Element;
}

export const Dropdown: FC<Props> = ({
  isActive,
  setIsActive,
  children,
  name,
}): JSX.Element => {
  return (
    <div
      className={`${styles.dropdown} ${isActive && styles.active}`}
    >
      <div
        className={styles.title}
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <Text type="h2" fw="500" fz="1rem">
          {name}
        </Text>
        <div className={`${styles.arrow} ${isActive && styles.active}`}>
          <img src="/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div className={styles.inputs}>{children}</div>
    </div>
  );
};
