import { FC } from "react";
import styles from "./Post.module.scss";
import { Text } from "../../../shared";
import { Slider } from "../../../entities";

export const Post: FC = (): JSX.Element => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <div className={styles.content}>
          <img
            src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
            alt="post"
          />
          <Text type="h3">Lorem Ipsum</Text>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.desc}>
          <Text>
            Lorem Ipsum является текст-заполнитель обычно используется в
            графических, печать и издательской индустрии для предварительного
            просмотра макета
          </Text>
        </div>
        <Slider />
      </div>
      {/* <div style={{ padding: "0 20px" }}>
        <div className={styles.nav_bar}>
          <div className={styles.btns}>
            <div className={styles.like}>
              <img src="/post/like.svg" alt="like" />
            </div>
            <div className={styles.send}>
              <img src="/post/send.svg" alt="send" />
            </div>
            <div className={styles.save}>
              <img src="/post/save.svg" alt="save" />
            </div>
          </div>
          <div className={styles.btns}>
            <img src="/post/pereslat.svg" alt="pereslat" />
          </div>
        </div>
      </div> */}
    </div>
  );
};
