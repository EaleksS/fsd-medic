import { FC } from "react";
import styles from "./Mess.module.scss";
import { Text } from "../../../shared";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

interface Props {
  id: number;
}

export const Mess: FC<Props> = ({ id }): JSX.Element => {
  return (
    <div className={styles.message}>
      <img src="/user.png" className={styles.user} alt="" />
      <div
        className={styles.cont}
        style={id % 2 === 0 ? { background: "#ff8181" } : {}}
      >
        {id % 2 !== 0 && (
          <div className={styles.proch}>
            <IoCheckmarkDoneCircleSharp />
          </div>
        )}
        <Text type="h4">Могу ли я перенести запись по врмени?!</Text>
        <div className={styles.datetime}>23:49</div>
      </div>
    </div>
  );
};
