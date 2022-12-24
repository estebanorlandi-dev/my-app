import FirebaseProvider from "context/firebase";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";

import "services/firebase/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </FirebaseProvider>
  );
}
