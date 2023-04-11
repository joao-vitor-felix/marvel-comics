import { FC } from "react";
import { OtherDescription } from "../ComicDetails/ComicDetails.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CharactersListProps = {
  characters: {
    items: {
      name: string;
      resourceURI: string;
    }[];
  };
};

const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <OtherDescription>
      Characters:
      {characters.items.length > 0
        ? characters.items.map((character, index, array) => (
            <OtherDescription key={index}>
              {` ${character.name}`}
              {index === array.length - 1 ? "." : ", "}
            </OtherDescription>
          ))
        : " No characters found."}
    </OtherDescription>
  );
};

export default CharactersList;
