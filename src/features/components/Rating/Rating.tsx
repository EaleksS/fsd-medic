import { FC } from "react";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import styles from "./Rating.module.scss";

interface Props {
  rating: number;
}

export const Rating: FC<Props> = ({ rating }): JSX.Element => {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((s) => {
        if (s - 0.5 <= rating && rating <= s - 0.1)
          return <BsStarHalf key={s + 10} />;

        if (rating >= s) return <BsStarFill key={s + 10} />;

        return <BsStar key={s + 10} />;
      })}
    </div>
  );
};
