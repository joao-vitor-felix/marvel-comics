import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

type NavProps = {
  navbarColor: boolean;
};

type SidebarProps = {
  showSideBar: boolean;
};

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

export const Menu = styled(FontAwesomeIcon)`
  color: white;
  height: 30px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    margin: 0 5px 0 15px;
  }
`;

export const Sidebar = styled.div<SidebarProps>`
  height: 100vh;
  width: 160px;
  visibility: hidden;
  z-index: 50;
  transform: translateX(-400px);
  transition: all 0.3s ease;
  background-color: #202020;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 20px;
  ${({ showSideBar }) =>
    showSideBar &&
    css`
      visibility: visible;
      transform: translateX(0);
    `}
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: white;
`;

export const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  height: 30px;
  color: white;
  cursor: pointer;
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
  margin: 0 30px 0 40px;

  @media screen and (max-width: 700px) {
    margin: 0 3px 0 12px;
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

export const Search = styled(FontAwesomeIcon)`
  color: red;
  height: 25px;
`;

export const Heart = styled(Search)`
  cursor: pointer;
`;
