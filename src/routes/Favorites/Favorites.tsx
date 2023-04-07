import ButtonToTop from "../../components/ButtonToTop/ButtonTopTop";
import Comic from "../../components/Comic/Comic";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useFavoriteContext from "../../hooks/useFavoriteContext";
import { Container, Title } from "./Favorites.styles";

const Favorites = () => {
  useDocumentTitle("Favorites | Marvel Comics");
  const { favorites } = useFavoriteContext();
  return (
    <>
      <Title>Your Favorite Comics</Title>
      <Container>
        {favorites?.map(comic => (
          <Comic
            title={comic.title}
            images={comic.images}
            key={comic.id}
            id={comic.id}
            favorite={comic}
          />
        )) || <SkeletonCard comics={favorites.length} />}
        <ButtonToTop />
      </Container>
    </>
  );
};
export default Favorites;
