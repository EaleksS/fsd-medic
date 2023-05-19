import { FC, useEffect } from "react";
import { Layout, Map } from "../../widgets";

export const MapPage: FC = (): JSX.Element => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <Layout>
      <Map />
    </Layout>
  );
};
