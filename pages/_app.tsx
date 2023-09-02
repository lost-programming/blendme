import '../styles/app.scss';
import Head from "next/head";
import Header from '../components/layout/header';
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BlendMe</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  )
}
