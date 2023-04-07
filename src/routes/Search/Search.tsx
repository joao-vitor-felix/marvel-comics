import { useParams } from "react-router-dom";
import { Container } from "./Search.styles";
import useComicsByName from "../../hooks/useComicsByName";
import Comic from "../../components/Comic/Comic";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

const Search = () => {
  const { title } = useParams();
  const { data } = useComicsByName(String(title));

  return (
    <Container>
      {(data &&
        data.map(comic => (
          <Comic
            title={comic.title}
            images={comic.images}
            id={comic.id}
            key={comic.id}
            favorite={comic}
          />
        ))) || <SkeletonCard comics={20} />}
    </Container>
  );
};

export default Search;
