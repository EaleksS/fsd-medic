import { Dispatch, FC } from "react";
import styles from "./Blur.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

export const Blur: FC<Props> = ({ isActive, setIsActive }): JSX.Element => {
  return (
    <div
      className={`${styles.blur} ${isActive && styles.active}`}
      onClick={() => setIsActive(false)}
    ></div>
  );
};
