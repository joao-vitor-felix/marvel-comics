import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-top: 60px;
  padding: 0 40px;
`;

export const Arrow = styled(FontAwesomeIcon)`
  color: red;
  height: 35px;
  position: absolute;
  top: calc(170px - 60px);
  left: calc(100px - 60px);
  cursor: pointer;

  @media screen and (max-width: 600px) {
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 100px 8px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 400px;
`;

export const DetailContainer = styled.div`
  color: white;
  align-self: flex-start;
  margin: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 260px;
    margin: 16px 8px;
    align-self: center;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  justify-self: flex-start;
`;

export const Description = styled.span`
  font-size: 16px;
  margin-bottom: 14px;
`;

export const OtherDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

export const OtherDescription = styled.span`
  font-size: 16px;
`;
