import { useState } from "react";

import { Button, Card, Container, Grid, Text, Image, Row } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonDetail } from "../../interfaces";
import { getPokemoInfo, localFavorites } from "../../utils";
import confetti from "canvas-confetti";
import { Star } from "react-iconly";

interface Props {
  pokemon: PokemonDetail;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const title = `Detalle del pokemon ${pokemon.name}`;

  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={title}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card color={"gradient"} hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "start" , alignItems: 'center' , gap:'$10'}}
            >
              <Text
                h1
                transform="capitalize"
                css={{
                  textGradient: '45deg, $yellow800 -20%, $red200 100%'
                }}
              >
                {pokemon.name}
              </Text>
              <Button
                icon={<Star  primaryColor = { isInFavorites ? "red" : "white" }  stroke='bold'
                size='xlarge' filled />}
                auto
                // ghost={!isInFavorites}
                onClick={onToggleFavorite}  
                // color='default'       
                css={{ backgroundColor: 'Black' }}      
              >
                {/* {!isInFavorites ? " Agregar en favoritos" : "En favoritos"} */}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={20}> Sprites:</Text>
              <Container xl direction="row" display="flex" justify='flex-start' alignItems='flex-start'>
                <Row>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsPage = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemonsPage.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemoInfo(id);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    // revalidate: 86400
  };
};

export default PokemonPage;
