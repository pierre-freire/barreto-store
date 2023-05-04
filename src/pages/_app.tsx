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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
