import { FC } from "react";
import { Grid } from "@nextui-org/react";
import PokemonCardFavorites from "./PokemonCardFavorites";

interface Props {
  pokemons: number[];
}

const PokemonFavorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <PokemonCardFavorites key={id} id={id} />
      ))}
    </Grid.Container>
  );
};

export default PokemonFavorites;
