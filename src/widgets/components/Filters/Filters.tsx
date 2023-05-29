import { FC, useEffect } from "react";
import styles from "./Filters.module.scss";
import { useWindowDimensions } from "../../../shared";

interface Props {
  isActive: boolean;
}

export const Filters: FC<Props> = ({ isActive }): JSX.Element => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 800) {
      document.body.style.overflowY = "auto";
      return;
    }

    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive, width]);

  return (
    <div
      className={`${styles.filters} ${isActive && styles.active}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.content}>filters</div>
    </div>
  );
};
