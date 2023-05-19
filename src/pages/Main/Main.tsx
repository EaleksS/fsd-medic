import { FC } from "react";
import { Layout, Post, TopDoctor } from "../../widgets";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <Post />
      <TopDoctor />
    </Layout>
  );
};
