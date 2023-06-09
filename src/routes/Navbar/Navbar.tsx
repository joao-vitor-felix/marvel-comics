import {
  Nav,
  InputContainer,
  FavLoginContainer,
  Search,
  Heart,
  Menu,
  LogoContainer,
  Sidebar,
  Title,
  CloseButton
} from "./Navbar.styles";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Marvel from "../../assets/marvel-logo.svg";
import { Logo } from "./Navbar.styles";
import {
  faBars,
  faHeart,
  faMagnifyingGlass,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Searchbox from "../../components/Searchbox/Searchbox";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        showSideBar &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setShowSideBar(!showSideBar);
      }
    };

    addEventListener("mousedown", checkIfClickedOutside);

    return () => removeEventListener("mousedown", checkIfClickedOutside);
  }, [showSideBar]);

  useEffect(() => {
    setShowSideBar(false);
  }, [location]);

  return (
    <>
      <Nav navbarColor={navbarColor} ref={ref}>
        <Sidebar showSideBar={showSideBar}>
          <Title>Menu</Title>
          <CloseButton
            icon={faTimes}
            onClick={() => setShowSideBar(!showSideBar)}
          />
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("favorites")}>Favorites</Button>
        </Sidebar>
        <Menu icon={faBars} onClick={() => setShowSideBar(!showSideBar)} />
        <LogoContainer to="/" aria-label="Home">
          <Logo src={`${Marvel}`} />
        </LogoContainer>
        <InputContainer>
          <label htmlFor="search">
            <Search icon={faMagnifyingGlass} />
          </label>
          <Searchbox id="search" />
        </InputContainer>
        <FavLoginContainer>
          <NavLink to="favorites" aria-label="Favoritos">
            <Heart icon={faHeart} />
          </NavLink>
        </FavLoginContainer>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
