import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Comic } from "../../types/Comic";

type ContextType = {
  favorites: Comic[];
  setFavorites: React.Dispatch<React.SetStateAction<Comic[]>>;
  toggleFavorite: (favorite: Comic) => void;
};

export const FavoriteContext = createContext<ContextType>({
  favorites: [],
  setFavorites: () => null,
  toggleFavorite: () => null
});

const FavoriteContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Comic[]>([]);

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, 0);
  }, [favorites]);

  const toggleFavorite = (favorite: Comic) => {
    const existingComic = favorites.find(comic => comic.id === favorite.id);

    if (existingComic) {
      setFavorites(favorites.filter(comic => comic.id !== existingComic.id));
    } else {
      setFavorites([...favorites, favorite]);
    }
  };

  console.log(favorites);

  const value = { favorites, setFavorites, toggleFavorite };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
