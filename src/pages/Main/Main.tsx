import { FC } from "react";
import { Layout, Post, TopDoctor } from "../../widgets";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      {[1, 2, 3, 4, 5].map((e) => (
        <Post key={e} />
      ))}
      <TopDoctor />
    </Layout>
  );
};
