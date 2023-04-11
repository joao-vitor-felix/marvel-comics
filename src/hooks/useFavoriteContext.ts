import { useContext } from "react";
import { FavoriteContext } from "./../contexts/FavoritesContext/FavoritesContext";

const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
};

export default useFavoriteContext;
