import { Html, Head, Main, NextScript } from "next/document";

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
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
