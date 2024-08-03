import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Passyah Raffi - Shopify Password Preview</title>
        <meta
          name="description"
          content="Website ini dikembangkan oleh Passyah Raffi untuk memudahkan pengguna dalam melihat hasil dari website yang sedang dibangun, termasuk fitur pembayaran yang masih dalam tahap pengembangan. Tujuannya adalah untuk memberikan kemudahan akses dan pemantauan terhadap progress website secara real-time sebelum diluncurkan secara resmi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
