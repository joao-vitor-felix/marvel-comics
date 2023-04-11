import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Arrow,
  Container,
  DetailContainer,
  Details,
  Image,
  Title,
  Description,
  OtherDescription,
  OtherDescriptionContainer
} from "./ComicDetails.styles";
import { FC } from "react";
import { Comic } from "../../types/Comic";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import useFavoriteContext from "../../hooks/useFavoriteContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CharactersList from "../CharactersList/CharactersList";
import CreatorsList from "../CreatorsList/CreatorsList";

type ComicDetailsProps = Comic & {
  favorite: Comic;
};

const ComicDetails: FC<ComicDetailsProps> = ({
  title,
  description,
  pageCount,
  format,
  images,
  id,
  creators,
  characters,
  favorite
}) => {
  const { favorites, toggleFavorite } = useFavoriteContext();

  const isFavorite = favorites.some(comic => comic.id === id);
  const navigate = useNavigate();

  return (
    <Container>
      <Arrow icon={faArrowLeft} onClick={() => navigate(-1)}></Arrow>
      <Details>
        {images ? (
          <Image
            src={`${images[0]?.path}.${images[0]?.extension}`}
            alt={`${{ title }}`}
          />
        ) : (
          <Skeleton height={400} width={260.23} />
        )}

        <DetailContainer>
          {title ? <Title>{title}</Title> : <Skeleton count={1} />}

          {(
            <Description>
              Description:
              {description ? ` ${description}` : " No description found."}
            </Description>
          ) || <Skeleton count={3} />}
          <OtherDescriptionContainer>
            {pageCount ? (
              <OtherDescription>Page count: {pageCount}.</OtherDescription>
            ) : (
              <Skeleton count={1} />
            )}
            {format ? (
              <OtherDescription>Format: {format}.</OtherDescription>
            ) : (
              <Skeleton count={1} />
            )}
            {creators ? (
              <CreatorsList creators={creators} />
            ) : (
              <Skeleton count={1} />
            )}
            {characters ? (
              <CharactersList characters={characters} />
            ) : (
              <Skeleton count={1} />
            )}
          </OtherDescriptionContainer>
          <Button onClick={() => toggleFavorite(favorite)}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Button>
        </DetailContainer>
      </Details>
    </Container>
  );
};

export default ComicDetails;
