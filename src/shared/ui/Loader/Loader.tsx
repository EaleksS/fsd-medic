import { FC } from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
  h?: number;
  w?: number;
}

export const Loader: FC<Props> = ({
  className,
  h = 80,
  w = 80,
}): JSX.Element => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <ColorRing
        visible={true}
        height={h}
        width={w}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
