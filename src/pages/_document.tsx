import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon.png"
        />
        <title>Memori - AI Photo Restoration</title>
        <meta
          name="description"
          content="Repair and enhance old photos.."
        />
        <meta
          name="keywords"
          content="AI, photo restoration, fix old photos,  photo enhancement, photo editing, photo recovery, photo recovery app, photo recovery software, photo recovery tool, photo recovery app, photo recovery software, photo recovery tool"
        />
        <meta
          name="author"
          content="@davidtranwd"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          name="googlebot"
          content="index, follow"
        />
        <meta
          name="google"
          content="notranslate"
        />

        <Script
          id="google-tag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRVM1THQZ1"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZRVM1THQZ1');`}
        </Script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
