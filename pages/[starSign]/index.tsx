import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { starSignList } from "../../utils/constants";
import { capitalize } from "../../utils/utils";
import { Configuration, OpenAIApi } from "openai";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import MainLayout from "@layouts/main-layout";

import styles from "./star-sign.module.scss";
import cx from "classnames";
import ShareButtons from "@components/share";
import MainPageNavigationButton from "@components/navigation/main-page";

import prisma from "@db/prisma";
import { ZodiacSign } from "@prisma/client";

type StarSignProps = {
  starSign: string;
  horoscopeText: string;
};
const StarSignPage: NextPage<StarSignProps> = ({ starSign, horoscopeText }) => {
  return (
    <MainLayout
      title={`${starSign} | Hor(rible)scope`}
      metaDescription={`Today's horrible horoscope prediction, send it to your ${starSign} friend.`}
    >
      <article className={styles.horoscopeContainer}>
        <MainPageNavigationButton />
        <div className={styles.header}>
          <h1 className={styles.horoscopeTitle}>{starSign}</h1>
          <ShareButtons
            title={`${starSign} | Hor(rible)scope`}
            text={`Horrible, AI-generated, horoscope predictions for the ${starSign} Zodiac Signs`}
          />
        </div>
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

  const capitalizedStarSign = capitalize(starSign) as ZodiacSign;

  let horoscopeText;

  if (process.env.NODE_ENV === "production") {
    // call the gpt-3 api here to generate shitty horoscopes 👍
    const openAIConfig = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(openAIConfig);

    try {
      const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Write an offensive, satirical and funny horoscope for a ${starSign} zodiac sign. Use lots of profanity, be as vulgar as possible. Keep it to within 250 characters.
        `,
        max_tokens: 1024,
        top_p: 1,
        temperature: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
        stop: ["#", "#retrograde"],
      });

      horoscopeText =
        completion.data.choices?.[0].text ??
        `${starSign} doesn't even deserve a horoscope for today. Go waste your time somewhere else.`;

      // insert horoscope into db!
      await prisma.zodiac.create({
        data: {
          sign: capitalizedStarSign,
          horoscope: horoscopeText,
        },
      });
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
    .tz("America/Los_Angeles")
    .add(1, "day")
    .startOf("d")
    .diff(dayjs().tz("America/Los_Angeles"), "seconds");

  return {
    props: {
      starSign: capitalizedStarSign,
      currentTime: dayjs().tz("America/Los_Angeles").unix(),
      horoscopeText,
    },
    // calculate the time to midnight PST and set as revalidate
    revalidate: revalidateTime,
  };
};

export default StarSignPage;
