import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type ComicProps = {
  image: string;
};

export const ImageSliderContainer = styled.div`
  padding-top: 20px;
  width: 85%;
  height: 400px;
  margin: 0 auto;
  position: relative;
`;

export const Comic = styled.div<ComicProps>`
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: #fff;
  background-color: #202020;
  height: max-content;
  padding: 8px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    /* height: max-content; */
    font-size: 18px;
    padding: 8px;
  }
`;

export const ArrowLeft = styled(FontAwesomeIcon)`
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 32px;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;

export const ArrowRight = styled(FontAwesomeIcon)`
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px;
  color: #fff;
  z-index: 1;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  position: absolute;
  top: calc(400px - 65px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    top: calc(380px - 58px);
  }

  /* @media screen and (min-width: 500px) and (max-width: 700px) {
    top: 84%;
  } */
`;

export const Dots = styled(FontAwesomeIcon)`
  cursor: pointer;
  height: 20px;
  color: #ec1d24;

  /* @media screen and (max-width: 500px) {
    height: 20px;
  } */
`;

export const SkeletonContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  padding-top: 20px;
`;
