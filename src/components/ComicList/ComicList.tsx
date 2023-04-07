import Comic from "../Comic/Comic";
import { Container, Error } from "./ComicList.styles";
import useComics from "../../hooks/useComics";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const ComicList = () => {
  const { data, isError } = useComics();

  return (
    <>
      {isError && <Error>Ooops! something went wrong!</Error>}
      <Container>
        {data?.map(comic => (
          <Comic
            title={comic.title}
            images={comic.images}
            key={comic.id}
            id={comic.id}
            favorite={comic}
          />
        )) || <SkeletonCard comics={20} />}
      </Container>
    </>
  );
};

export default ComicList;
