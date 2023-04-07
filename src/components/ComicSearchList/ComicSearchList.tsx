import { FC } from "react";
import { Comic } from "../../types/Comic";
import { SearchListContainer } from "./ComicSearchList.styles";
import ComicSearch from "../ComicSearch/ComicSearch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SearchListProps = {
  comics: Comic[];
  search: string;
};

const ComicSearchList: FC<SearchListProps> = ({ comics, search }) => {
  const shouldShowSkeleton = comics.length === 0 && search !== "";

  return (
    <SearchListContainer>
      {comics
        ?.filter((comics, idx) => idx < 5)
        .map(comic => (
          <ComicSearch
            images={comic.images}
            title={comic.title}
            key={comic.id}
            id={comic.id}
          />
        ))}
      {shouldShowSkeleton && <Skeleton height={81} width={350} count={5} />}
    </SearchListContainer>
  );
};

export default ComicSearchList;
