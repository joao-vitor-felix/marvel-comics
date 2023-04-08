import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 340px;
  height: 80px;
  background-color: #1d1b1a;
  border: 1px solid #4d4b4a;
  border-radius: 2px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    max-width: 200px;
    height: 90px;
  }

  @media screen and (max-width: 500px) {
    max-width: 150px;
  }
`;

export const Image = styled.img`
  height: 80px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 16px;
  padding: 26px 16px;

  @media screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 12px;
  }
`;
