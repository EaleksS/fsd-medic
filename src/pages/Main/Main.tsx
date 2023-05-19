import { FC } from "react";
import { Layout, Post } from "../../widgets";
import { Text } from "../../shared";
import { Rating } from "../../features";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div>
        <Post />
        <br />
        <br />
        <Rating rating={1} />
        <Rating rating={2} />
        <Rating rating={3} />
        <Rating rating={4} />
        <Rating rating={5} />
        <br />
        <br />
        <Text type="h1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          eum?
        </Text>
        <br /> <br />
        <Text type="h2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
          est.
        </Text>
        <br /> <br />
        <Text type="h3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque.
        </Text>
        <br /> <br />
        <Text type="h4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          ex.
        </Text>
        <br /> <br />
        <Text type="h5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
          aliquam?
        </Text>
        <br /> <br />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          aliquid veniam, neque corporis inventore placeat sunt dignissimos,
          unde harum beatae fuga dolorum. Dolore modi quae ad doloribus
          mollitia? Nulla obcaecati deserunt qui unde, quisquam totam dolore
          magni hic vero laudantium. Rerum quibusdam vitae numquam illum velit
          reprehenderit itaque at quasi aperiam minus, labore deleniti quae
          mollitia nihil maiores alias dicta ad voluptatibus. Mollitia
          perferendis, dolorem magni, laborum blanditiis nobis animi id ullam
          hic quis nulla ratione impedit sequi voluptas veritatis facilis! Ut a
          fuga porro aspernatur, quibusdam iusto! Amet, pariatur deleniti.
          Tenetur inventore excepturi omnis. Quibusdam enim quis molestiae
          perferendis?
        </Text>
      </div>
    </Layout>
  );
};
