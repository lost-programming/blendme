import React from "react";
import "../styles/app.scss";
import Head from "next/head";
import Header from "../components/layout/header";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BlendMe</title>
        <meta name="description" content="원하는 원두의 정보를 확인하고 자신만의 블렌딩을 해보세요."/>
        {/* OG 태그 */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="BlendMe" />
        <meta property="og:description" content="원하는 원두의 정보를 확인하고 자신만의 블렌딩을 해보세요." />
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
  );
}
