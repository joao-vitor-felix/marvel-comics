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
  favorite
}) => {
  const { favorites, toggleFavorite } = useFavoriteContext();

  const isFavorite = favorites.some(comic => comic.id === id);
  const navigate = useNavigate();

  return (
    <Container>
      <Arrow icon={faArrowLeft} onClick={() => navigate("/")}></Arrow>
      <DetailContainer>
        <Image
          src={`${images[0]?.path}.${images[0]?.extension}`}
          alt={`${{ title }}`}
        />
        <Details>
          <Title>{title}</Title>
          <Description>
            Description: {description ? description : " No description found."}
          </Description>
          <OtherDescriptionContainer>
            <OtherDescription>Number of pages: {pageCount}</OtherDescription>
            <OtherDescription>Format: {format}</OtherDescription>
          </OtherDescriptionContainer>
          <Button onClick={() => toggleFavorite(favorite)}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Button>
        </Details>
      </DetailContainer>
    </Container>
  );
};

export default ComicDetails;
