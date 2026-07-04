import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/Header";
import {
  DEFAULT_DESCRIPTION,
  defaultOpenGraph,
  defaultTwitter,
  SITE_NAME,
  THEME_COLOR,
} from "@/lib/seo";
import "@/styles/globals.css";
import { sans, serif } from "@/font/fonts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={SITE_NAME}
        titleTemplate={`%s · ${SITE_NAME}`}
        description={DEFAULT_DESCRIPTION}
        themeColor={THEME_COLOR}
        openGraph={defaultOpenGraph}
        twitter={defaultTwitter}
      />
      <style jsx global>{`
        html {
          font-family: ${sans.style.fontFamily};
        }

        h1,
        h2,
        h3 {
          font-family: ${serif.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, viewport-fit=cover"
        />
        <meta
          name="google-site-verification"
          content="eWe6gVI-N_FNp6_N2Kgegk3bWx-jkoKv028MeG1fEK4"
        />
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
}
