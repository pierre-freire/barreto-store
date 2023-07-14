import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Roboto } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const getContent = () => {
    // array of all the paths that doesn't need layout
    if ([`/login`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return <div className={roboto.className}>{getContent()}</div>;
}
