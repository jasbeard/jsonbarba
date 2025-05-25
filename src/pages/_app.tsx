import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const inter = Noto_Sans({
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ThemeProvider attribute="class">
        <DefaultSeo
          defaultTitle="Jason Barba"
          description="Have a nice day!"
          canonical="https://jsonbarba.com"
        />
        <Head>
          <meta name="google-site-verification" content="eWe6gVI-N_FNp6_N2Kgegk3bWx-jkoKv028MeG1fEK4" />
        </Head>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </main>
  );
}
