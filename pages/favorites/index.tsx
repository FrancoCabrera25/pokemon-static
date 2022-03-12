import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { PokemonFavorites } from "../../components/pokemon";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.getPokemonsInFavorites());
  }, []);

  return (
    <Layout title="Pokemons favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonFavorites pokemons={favoritesPokemons} />

      )}
    </Layout>
  );
};

export default FavoritesPage;
