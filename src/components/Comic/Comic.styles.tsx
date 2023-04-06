import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  text-decoration: none;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  position: relative;
`;

export const Image = styled.img`
  max-height: 300px;
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding: 5px 10px;
  text-align: center;
  margin: 0 auto;
  background-color: #202020;
  color: white;
`;

export const Heart = styled(FontAwesomeIcon)`
  height: 25px;
  position: absolute;
  top: calc(300px - 45px);
  right: 15px;
  z-index: 5;
`;

export const RedHeart = styled(Heart)`
  color: red;
`;
