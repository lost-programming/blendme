import '../styles/app.scss';
import Header from '../components/layout/header';
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
