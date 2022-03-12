import { Card, Grid } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from 'next/router';

const PokemonCardFavorites: FC<{ id: number }> = ({ id }) => {

  const router = useRouter();

const goPagePokemonDetail = (): void => {
      router.push(`/pokemon/${id}`);
}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={goPagePokemonDetail}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default PokemonCardFavorites;
