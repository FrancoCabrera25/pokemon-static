import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";
import NextLink from "next/link";

const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt="icon"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer
          css={{
            flex: 1,
          }}
        />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px'}}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
