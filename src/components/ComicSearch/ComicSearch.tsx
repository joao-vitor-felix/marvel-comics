import { FC } from "react";
import { SearchContainer, Image, Title } from "./ComicSearch.styles";

type SearchProps = {
  images: {
    path: string;
    extension: string;
  }[];
  title: string;
  id: number;
};

const ComicSearch: FC<SearchProps> = ({ images, title, id }) => {
  return (
    <SearchContainer to={`/details/${id}`}>
      <Image
        src={`${images[0]?.path}.${images[0]?.extension}`}
        alt={`${title}`}
      />
      <Title>{title}</Title>
    </SearchContainer>
  );
};

export default ComicSearch;
