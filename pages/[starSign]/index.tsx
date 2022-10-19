import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { starSignList } from "../../utils/constants";
import { capitalize } from "../../utils/utils";
import { Configuration, OpenAIApi } from "openai";
import dayjs from "dayjs";
import MainLayout from "@layouts/main-layout";

import styles from "./star-sign.module.scss";
import cx from "classnames";

type StarSignProps = {
  starSign: string;
  horoscopeText: string;
};
const StarSignPage: NextPage<StarSignProps> = ({ starSign, horoscopeText }) => {
  return (
    <MainLayout
      title={`${starSign} | Hor(rible)scope`}
      metaDescription={`Today's horrible horoscope, send it to your ${starSign} friend.`}
    >
      {/* Add FAQ Page json-LD to SEO here */}
      <article className={styles.horoscopeContainer}>
        <h1 className={styles.horoscopeTitle}>{starSign}</h1>
        <p className={styles.horoscope}>
          <span className={cx(styles.blockQuote, styles.leftQuote)}>
            &ldquo;
          </span>
          <span className={styles.horoscopeText}>{horoscopeText}</span>
          <span className={cx(styles.blockQuote, styles.rightQuote)}>
            &rdquo;
          </span>
        </p>
      </article>
    </MainLayout>
  );
};

type StarSignSlugParams = { starSign: string };
export const getStaticPaths: GetStaticPaths<StarSignSlugParams> = async () => {
  return {
    paths: starSignList.map(({ sign }) => ({
      params: {
        starSign: sign.toLowerCase(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  StarSignProps,
  StarSignSlugParams
> = async (context) => {
  const starSign = context?.params?.starSign;

  if (!starSign) {
    return { notFound: true };
  }

  const capitalizedStarSign = capitalize(starSign);

  let horoscopeText;

  if (process.env.NODE_ENV === "production") {
    // call the gpt-3 api here to generate shitty horoscopes 👍
    const openAIConfig = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(openAIConfig);

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Write an offensive and funny horoscope prediction for a ${starSign} zodiac sign with profanity, and make it relevant to current events.`,
        max_tokens: 2048,
        temperature: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
      });

      horoscopeText =
        completion.data.choices?.[0].text ??
        `${starSign} doesn't even deserve a horoscope for today. Go waste your time somewhere else.`;
    } catch (err) {
      return { notFound: true };
    }
  } else {
    // in development mode, put in some other random text from lorem ipsum api
    const horoscopeTextPromise = await fetch(
      "https://loripsum.net/api/1/medium/prude/plaintext"
    );
    horoscopeText = await horoscopeTextPromise.text();
  }

  dayjs.extend(utc);
  dayjs.extend(timezone);

  // seconds until 12AM PST for new horoscopes
  const revalidateTime = dayjs()
    .tz("America/New_York")
    .add(1, "day")
    .startOf("d")
    .diff(dayjs().tz("America/New_York"), "seconds");

  console.log({ revalidateTime });

  return {
    props: {
      starSign: capitalizedStarSign,
      horoscopeText,
    },
    // calculate the time to midnight PST and set as revalidate
    revalidate: revalidateTime,
  };
};

export default StarSignPage;
