import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface PropsLayout  {
  title?: string;
}

const Layout: FC<PropsLayout> = ({ children, title }) => {
  return <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="fr<anco cabrera" />
            <meta name="descripcion" content="información sobre pokemon"/>
            <meta name="keywords" content="pokemon" />
        </Head>

        <Navbar />
        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
  </>;
};

export default Layout;
