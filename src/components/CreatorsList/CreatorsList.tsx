import Skeleton from "react-loading-skeleton";
import { OtherDescription } from "../ComicDetails/ComicDetails.styles";
import "react-loading-skeleton/dist/skeleton.css";
import { FC } from "react";

type CreatorsListProps = {
  creators: {
    items: {
      name: string;
      resourceURI: string;
      role: string;
    }[];
  };
};

const CreatorsList: FC<CreatorsListProps> = ({ creators }) => {
  return (
    <OtherDescription>
      Creators:
      {creators.items.length > 0
        ? creators.items.map((creator, index, array) => (
            <OtherDescription key={index}>
              {` ${creator.name}`}
              {index === array.length - 1 ? "." : ", "}
            </OtherDescription>
          ))
        : " No creators found."}
    </OtherDescription>
  );
};
export default CreatorsList;
