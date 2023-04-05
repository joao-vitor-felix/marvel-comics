import { FC } from "react";
import { SearchContainer, Image, Title } from "./Search.styles";

type SearchProps = {
  images: {
    path: string;
    extension: string;
  }[];
  title: string;
};

const Search: FC<SearchProps> = ({ images, title }) => {
  return (
    <SearchContainer>
      <Image
        src={`${images[0]?.path}.${images[0]?.extension}`}
        alt={`${title}`}
      />
      <Title>{title}</Title>
    </SearchContainer>
  );
};

export default Search;
