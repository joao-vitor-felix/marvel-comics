import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 20px;
`;

export const Arrow = styled(FontAwesomeIcon)`
  color: red;
  height: 35px;
  position: absolute;
  top: 23px;
  left: 78px;
  z-index: 0;
  cursor: pointer;
`;

export const DetailContainer = styled.div`
  color: white;
  display: flex;
  justify-content: start;
  padding: 60px;
`;

export const Image = styled.img`
  height: 400px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const VariantDescription = styled.span`
  font-size: 16px;
  margin-bottom: 14px;
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
