import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

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
  padding: 16px 40px;
  box-shadow: 5px 0 5px black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 50;
  top: 0;
  left: 0;
  background-color: ${({ navbarColor }) => (navbarColor ? "#202020" : "none")};
  transition: all 0.1s ease;

  @media screen and (max-width: 700px) {
    padding: 16px 5px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
`;

export const FavLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 0 30px 0 40px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 45px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    height: 35px;
    padding: 0 5px;
  }
`;

export const LogoContainer = styled(NavLink)`
  text-decoration: none;
  padding: 0 30px 0 40px;

  @media screen and (max-width: 700px) {
    padding: 0 3px 0 12px;
  }
`;

export const Menu = styled(FontAwesomeIcon)`
  color: white;
  height: 25px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    padding: 0 5px 0 15px;
  }
`;

export const LoginButton = styled(Button)``;
