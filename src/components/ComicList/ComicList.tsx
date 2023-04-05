import Comic from "../Comic/Comic";
import { Container, Loading, Error } from "./ComicList.styles";
import useComics from "../../hooks/useComics";

const ComicList = () => {
  const { data, isFetching, isError } = useComics();

  return (
    <>
      {isFetching && <Loading>Loading comics...</Loading>}
      {isError && <Error>Ooops! something went wrong!</Error>}
      <Container>
        {data?.map(comic => (
          <Comic title={comic.title} images={comic.images} key={comic.id} />
        ))}
      </Container>
    </>
  );
};

export default ComicList;
