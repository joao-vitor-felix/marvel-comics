import Comic from "../Comic/Comic";
import { Container, Error, ButtonContainer } from "./ComicList.styles";
import useComics from "../../hooks/useComics";
import Button from "../Button/Button";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import { useState } from "react";

const ComicList = () => {
  const [offset, setOffset] = useState(100);
  const { data, isError } = useComics(String(offset));

  const nextComic = () => {
    setOffset(offset + 20);
    scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const previousComic = () => {
    setOffset(offset - 20);
    scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isError && <Error>Ooops! something went wrong!</Error>}
      <Container>
        {data?.data?.data?.results?.map(comic => (
          <Comic
            title={comic.title}
            images={comic.images}
            key={comic.id}
            id={comic.id}
            favorite={comic}
          />
        )) || <SkeletonCard comics={20} />}
      </Container>
      <ButtonContainer>
        <Button disabled={offset === 100} onClick={previousComic}>
          Previous
        </Button>
        <Button
          disabled={data && offset > data?.data?.data?.total - 20}
          onClick={nextComic}
        >
          Next
        </Button>
      </ButtonContainer>
    </>
  );
};

export default ComicList;
