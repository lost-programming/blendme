import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Documnet() {
  return (
    <Html lang="ko" className="BlendMe">
      <Head>
        <meta
          name="description"
          content="원하는 원두의 정보를 확인하고 자신만의 블렌딩을 해보세요."
          charSet="UTF-8"
        />
        {/* OG 태그 */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="BlendMe" />
        <meta
          property="og:description"
          content="원하는 원두의 정보를 확인하고 자신만의 블렌딩을 해보세요."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
