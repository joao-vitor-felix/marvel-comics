import { FC } from "react";
import { Container, Image, Title, Heart, RedHeart } from "./Comic.styles";
import useFavoriteContext from "../../hooks/useFavoriteContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Comic as ComicType } from "../../types/Comic";

type ComicProps = {
  title: string;
  id: number;
  images: {
    path: string;
    extension: string;
  }[];
  favorite: ComicType;
};

const Comic: FC<ComicProps> = ({ title, images, id, favorite }) => {
  const { favorites, toggleFavorite } = useFavoriteContext();

  const isFavorite = favorites.some(comic => comic.id === id);

  return (
    <Container>
      <Image
        src={`${images[0]?.path}.${images[0]?.extension}`}
        alt={`${title}`}
      />
      <Title to={`/details/${id}`}>{title}</Title>
      {isFavorite ? (
        <RedHeart onClick={() => toggleFavorite(favorite)} icon={faHeart} />
      ) : (
        <Heart onClick={() => toggleFavorite(favorite)} icon={faHeart} />
      )}
    </Container>
  );
};

export default Comic;
