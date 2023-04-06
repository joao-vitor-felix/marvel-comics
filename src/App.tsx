import { GlobalStyle } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./Theme";
import Navbar from "./routes/Navbar/Navbar";
import Home from "./routes/Home/Home";
import Details from "./routes/Details/Details";
import Favorites from "./routes/Favorites/Favorites";
import FavoriteContextProvider from "./contexts/FavoritesContext/FavoritesContext";

const App = () => {
  return (
    <FavoriteContextProvider>
      <Theme>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </Theme>
    </FavoriteContextProvider>
  );
};

export default App;
