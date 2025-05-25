import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

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
        {/* haki */}
        <Script id='override-theme' strategy="beforeInteractive">
          {`localStorage.setItem('theme', 'dark')`}
        </Script>
      </body>
    </Html>
  )
}
