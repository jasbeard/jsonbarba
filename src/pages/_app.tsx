import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const inter = Noto_Sans({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Jason Barba"
        description="Have a nice day!"
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, viewport-fit=cover"
        />
        <meta name="google-site-verification" content="eWe6gVI-N_FNp6_N2Kgegk3bWx-jkoKv028MeG1fEK4" />
      </Head>
      <ThemeProvider attribute="class">
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
