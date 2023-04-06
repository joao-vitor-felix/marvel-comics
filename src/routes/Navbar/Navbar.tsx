import {
  Nav,
  InputContainer,
  FavLoginContainer,
  Search,
  Heart
} from "./Navbar.styles";
import { NavLink, Outlet } from "react-router-dom";
import Marvel from "../../assets/marvel-logo.svg";
import { Logo } from "./Navbar.styles";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import Searchbox from "../../components/Searchbox/Searchbox";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeColor = () => {
    if (scrollY > 10) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", changeColor);

    return () => removeEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <Nav navbarColor={navbarColor}>
        <NavLink to="/">
          <Logo src={`${Marvel}`} />
        </NavLink>
        <InputContainer>
          <label htmlFor="search">
            <Search icon={faMagnifyingGlass} />
          </label>
          <Searchbox id="search" />
        </InputContainer>
        <FavLoginContainer>
          <NavLink to="favorites">
            <Heart icon={faHeart} />
          </NavLink>
          <Button>Login</Button>
        </FavLoginContainer>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
