import { FC } from "react";
import { Comic } from "../../types/Comic";
import {
  Message,
  SearchButton,
  SearchListContainer
} from "./ComicSearchList.styles";
import ComicSearch from "../ComicSearch/ComicSearch";

type SearchListProps = {
  comics: Comic[];
  search: string;
};

const ComicSearchList: FC<SearchListProps> = ({ comics, search }) => {
  return (
    <SearchListContainer>
      {comics
        ?.filter((comics, idx) => idx < 5)
        .map(comic => (
          <>
            <ComicSearch
              images={comic.images}
              title={comic.title}
              key={comic.id}
              id={comic.id}
            />
          </>
        ))}
      {comics.length > 0 && (
        <SearchButton to={`search/${search}`}>See more...</SearchButton>
      )}

      {comics.length === 0 && search.length > 0 && (
        <Message>No comics found.</Message>
      )}
    </SearchListContainer>
  );
};

export default ComicSearchList;
