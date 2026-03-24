import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Jason Barba Portfolio" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <body className="bg-gofuniro">
        <Main />
        <NextScript />
        {/* haki */}
        {/* <Script id='override-theme' strategy="beforeInteractive">
          {`localStorage.setItem('theme', 'dark')`}
        </Script> */}
      </body>
    </Html>
  );
}
