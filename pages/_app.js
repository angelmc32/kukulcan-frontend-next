import Head from "next/head";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kukulcan | Conecta con comunidades</title>
        <meta name="description" content="Creado por Mel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kukulcan.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
