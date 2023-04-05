import { FC } from "react";
import { Container, Image, Title } from "./Comic.styles";

type ComicProps = {
  title: string;
  images: {
    path: string;
    extension: string;
  }[];
};

const Comic: FC<ComicProps> = ({ title, images }) => {
  return (
    <Container>
      <Image
        src={`${images[0]?.path}.${images[0]?.extension}`}
        alt={`${title}`}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default Comic;
