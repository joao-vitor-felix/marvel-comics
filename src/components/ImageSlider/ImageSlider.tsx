import { useEffect, useState } from "react";
import useComics from "../../hooks/useComics";
import {
  ImageSliderContainer,
  Comic,
  ArrowLeft,
  ArrowRight,
  Title,
  SkeletonContainer,
  Dots,
  DotsContainer
} from "./ImageSlider.styles";
import {
  faChevronLeft,
  faChevronRight,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function generateRandomOffset() {
  const max = 1000;
  const min = 100;
  const range = (max - min) / 20 + 1;
  const offsetIndex = Math.floor(Math.random() * range);
  const offset = min + offsetIndex * 20;

  return offset;
}

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setOffset(String(generateRandomOffset()));
  }, []);

  const { data } = useComics(offset);

  const comicFiltered = data?.data?.data?.results.filter(
    (comic, idx) => idx < 3
  );

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? (comicFiltered?.length ?? 0) - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === (comicFiltered?.length ?? 0) - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {(comicFiltered && (
        <ImageSliderContainer>
          <ArrowLeft icon={faChevronLeft} onClick={goToPrevious} />
          <ArrowRight icon={faChevronRight} onClick={goToNext} />
          {comicFiltered && (
            <Comic
              image={`${comicFiltered[currentIndex].images[0]?.path}.${comicFiltered[currentIndex].images[0]?.extension}`}
              key={comicFiltered[currentIndex].id}
              onClick={() =>
                navigate(`/details/${comicFiltered[currentIndex].id}`)
              }
            >
              <Title>{comicFiltered[currentIndex].title}</Title>
            </Comic>
          )}
          <DotsContainer>
            {comicFiltered.map((comic, index) => (
              <Dots
                icon={faCircle}
                key={index}
                onClick={() => goToSlide(index)}
              />
            ))}
          </DotsContainer>
        </ImageSliderContainer>
      )) || (
        <SkeletonContainer>
          <Skeleton count={1} height={400} />
        </SkeletonContainer>
      )}
    </>
  );
};

export default ImageSlider;
