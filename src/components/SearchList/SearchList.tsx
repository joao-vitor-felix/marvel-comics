import { FC } from "react";
import { Comic } from "../../types/Comic";
import Search from "../Search/Search";
import { SearchListContainer } from "./SearchList.styles";

type SearchListProps = {
  comics: Comic[];
};

const SearchList: FC<SearchListProps> = ({ comics }) => {
  return (
    <SearchListContainer>
      {comics
        .filter((comics, idx) => idx < 5)
        .map(comic => (
          <Search images={comic.images} title={comic.title} key={comic.id} />
        ))}
    </SearchListContainer>
  );
};

export default SearchList;
