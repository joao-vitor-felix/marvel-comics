import { FC } from "react";
import { Comic } from "../../types/Comic";
import { SearchListContainer } from "./ComicSearchList.styles";
import ComicSearch from "../ComicSearch/ComicSearch";

type SearchListProps = {
  comics: Comic[];
};

const ComicSearchList: FC<SearchListProps> = ({ comics }) => {
  return (
    <SearchListContainer>
      {comics
        .filter((comics, idx) => idx < 5)
        .map(comic => (
          <ComicSearch
            images={comic.images}
            title={comic.title}
            key={comic.id}
            id={comic.id}
          />
        ))}
    </SearchListContainer>
  );
};

export default ComicSearchList;
