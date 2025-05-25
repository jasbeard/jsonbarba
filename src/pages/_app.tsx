import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';
import '@/styles/globals.css';
import { sans, serif } from '@/font/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Jason Barba"
        description="Have a nice day!"
      />
      <style jsx global>{`
        html {
          font-family: ${sans.style.fontFamily};
        }

        h1, h2, h3 {
          font-family: ${serif.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, viewport-fit=cover"
        />
        <meta name="google-site-verification" content="eWe6gVI-N_FNp6_N2Kgegk3bWx-jkoKv028MeG1fEK4" />
      </Head>
      <ThemeProvider attribute="class">
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
