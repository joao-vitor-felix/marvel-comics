import { GlobalStyle } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import FavoriteContextProvider from "./contexts/FavoritesContext/FavoritesContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { Suspense, lazy } from "react";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Spinner from "./components/Spinner/Spinner";

const Navbar = lazy(() => import("./routes/Navbar/Navbar"));
const Home = lazy(() => import("./routes/Home/Home"));
const Details = lazy(() => import("./routes/Details/Details"));
const Favorites = lazy(() => import("./routes/Favorites/Favorites"));
const Search = lazy(() => import("./routes/Search/Search"));

const App = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <FavoriteContextProvider>
        <GlobalStyle />
        <ScrollToTop />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="search/:title" element={<Search />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </Suspense>
      </FavoriteContextProvider>
    </SkeletonTheme>
  );
};

export default App;
