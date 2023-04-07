import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, Image, Title } from "./SkeletonCard.styles";
import { FC } from "react";

type SkeletonCardProps = {
  comics: number;
};

const SkeletonCard: FC<SkeletonCardProps> = ({ comics }) => {
  return (
    <>
      {Array(comics)
        .fill(0)
        .map((item, index) => (
          <Container key={index}>
            <Skeleton height={300} />
          </Container>
        ))}
    </>
  );
};

export default SkeletonCard;
