import "../styles/globals.scss";
import "../styles/design-tokens.scss";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  const defaultTitle = "Hor(rible)scope";
  const defaultDescription =
    "Horrible, AI generated, daily horoscope predictions.";

  return (
    <>
      <DefaultSeo
        title={defaultTitle}
        description={defaultDescription}
        openGraph={{
          title: defaultTitle,
          description: defaultDescription,
          type: "website",
          images: [
            {
              url: "https://i.imgur.com/JxY1O1p.png",
              width: 406,
              height: 245,
              alt: "horriblescope image",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
