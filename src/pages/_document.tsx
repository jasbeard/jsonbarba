import { body, display } from '@/font/fonts';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className={`${display.variable} ${body.variable}`}>
      <Head>
        <meta name="application-name" content="Jason Barba Portfolio" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <body className="dark:bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
