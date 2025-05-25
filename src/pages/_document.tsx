import { Html, Head, Main, NextScript } from 'next/document';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Jason Barba Portfolio" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <body className="dark:bg-dark">
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  )
}
