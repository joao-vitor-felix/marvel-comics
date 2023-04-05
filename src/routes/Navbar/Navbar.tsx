import {
  Nav,
  InputContainer,
  FavLoginContainer,
  Search,
  Heart
} from "./Navbar.styles";
import { Outlet, useActionData } from "react-router-dom";
import Marvel from "../../assets/marvel-logo.svg";
import { Logo } from "./Navbar.styles";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeColor = () => {
    if (scrollY > 100) {
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
        <Logo src={`${Marvel}`} />
        <InputContainer>
          <label htmlFor="search">
            <Search icon={faMagnifyingGlass} />
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search a comic"
            value=""
          />
        </InputContainer>
        <FavLoginContainer>
          <Heart icon={faHeart} />
          <Button>Login</Button>
        </FavLoginContainer>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
