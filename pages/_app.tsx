import FirebaseProvider from "context/firebase";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { IconContext } from "react-icons";

import "services/firebase/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <IconContext.Provider value={{ className: "global-icon" }}>
        <GlobalStyles />
        <Component {...pageProps} />
      </IconContext.Provider>
    </FirebaseProvider>
  );
}
