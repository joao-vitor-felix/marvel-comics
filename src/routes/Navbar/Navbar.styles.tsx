import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavProps = {
  navbarColor: boolean;
};

export const Search = styled(FontAwesomeIcon)`
  color: red;
  height: 25px;
`;

export const Heart = styled(Search)`
  cursor: pointer;
`;

export const Nav = styled.nav<NavProps>`
  width: 100wh;
  height: 80px;
  padding: 16px 50px;
  box-shadow: 5px 0 5px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 50;
  top: 0;
  left: 0;
  background-color: ${({ navbarColor }) => (navbarColor ? "#202020" : "none")};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const FavLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const Logo = styled.img`
  height: 45px;
  cursor: pointer;
`;
