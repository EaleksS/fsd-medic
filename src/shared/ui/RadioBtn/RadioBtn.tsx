import { Dispatch, FC } from "react";
import styles from "./RadioBtn.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

export const RadioBtn: FC<Props> = ({ isActive, setIsActive }): JSX.Element => {
  return (
    <div
      className={`${styles.radio} ${isActive && styles.active}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className={styles.circle}></div>
    </div>
  );
};
