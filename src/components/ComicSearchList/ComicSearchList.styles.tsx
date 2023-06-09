import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10;
  left: 8px;
`;

export const SearchButton = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 26px 16px;
  text-align: center;
  width: 340px;
  height: 80px;
  background-color: #1d1b1a;
  border: 1px solid #4d4b4a;
  border-radius: 2px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    max-width: 200px;
  }

  @media screen and (max-width: 500px) {
    max-width: 150px;
    padding: 25px 6px;
  }
`;

export const Message = styled.p`
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 26px 16px;
  text-align: center;
  width: 340px;
  height: 80px;
  background-color: #1d1b1a;
  border: 1px solid #4d4b4a;
  border-radius: 2px;

  @media screen and (max-width: 800px) {
    max-width: 200px;
  }

  @media screen and (max-width: 500px) {
    max-width: 150px;
    padding: 20px 6px;
  }
`;
