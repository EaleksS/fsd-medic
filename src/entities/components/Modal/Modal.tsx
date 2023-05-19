import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: (bool: boolean) => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({
  isActive,
  setIsActive,
  children,
}): JSX.Element => {
  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      onClick={() => setIsActive(false)}
    >
      <div
        className={`${styles.content} ${isActive && styles.active}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
