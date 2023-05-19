import { Dispatch, FC } from "react";
import styles from "./Extra.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

export const Extra: FC<Props> = ({ isActive, setIsActive }): JSX.Element => {
  return (
    <div className={styles.extra}>
      <div
        className={`${styles.btn2} ${styles.btn2_1} ${
          isActive && styles.active
        }`}
      >
        <img src="/extra/call.svg" alt="call" />
      </div>
      <div
        className={`${styles.btn2} ${styles.btn2_2} ${
          isActive && styles.active
        }`}
      >
        <img src="/extra/mess.svg" alt="mess" />
      </div>
      <div
        className={`${styles.btn} ${isActive && styles.active}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive((prev) => !prev);
        }}
      >
        <img src="/extra/phone.svg" alt="phone" className={styles.phone} />
        <img src="/extra/plus.svg" alt="plus" className={styles.plus} />
      </div>
    </div>
  );
};
