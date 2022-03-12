import { pokeApi } from "../api";
import { PokemonDetail } from "../interfaces";

export const getPokemoInfo = async (param: string) => {
  ///const { id } = params as { id: string };

  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${param}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
