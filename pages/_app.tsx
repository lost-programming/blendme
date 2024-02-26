import React, { useEffect } from "react";
import "../styles/app.scss";
import Header from "../components/layout/header";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/_error") router.push("/");
  }, []);

  return (
    <RecoilRoot>
      <title>BlendMe</title>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
