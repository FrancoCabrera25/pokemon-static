import { off } from "process";
import FavoritesPage from "../pages/favorites/index";
const toggleFavorite = (id: number): void => {
  let favorites = getPokemonsInFavorites();
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites = [...favorites, id];
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const getPokemonsInFavorites = (): number[] => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites;
};

const existInFavorites = (id: number): boolean => {;
  if(typeof window === "undefined") return false;

  const favorites = getPokemonsInFavorites();
  return favorites.includes(id);
};

export default {
  toggleFavorite,
  getPokemonsInFavorites,
  existInFavorites,
};
