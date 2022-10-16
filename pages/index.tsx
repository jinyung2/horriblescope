import type { GetStaticProps, NextPage } from "next";
import HorribleScopeLogo from "../components/logo/logo";

import styles from "./index.module.scss";

import { ONE_DAY_IN_SECONDS, starSignList } from "../utils/constants";
import StarSignCard from "../components/card/star-sign.card";
import MainLayout from "@layouts/main-layout";
import { getRandomInt } from "../utils/utils";

type HomeProps = {
  randomZodiac: string;
};
const Home: NextPage<HomeProps> = ({ randomZodiac }) => {
  return (
    <MainLayout title="" metaDescription="">
      <header className={styles.header}>
        <HorribleScopeLogo />
      </header>
      <section className={styles.mainTextSection}>
        <h6>
          Horoscopes are dumb, so here are some horrible ones to share with that
          annoying{" "}
          <strong>
            &ldquo;OMG you&apos;re such a {randomZodiac ?? "Gemini"}!&rdquo;
          </strong>{" "}
          friend.
        </h6>
      </section>
      <article className={styles.starSignContainer}>
        {starSignList.map(({ sign }) => (
          <StarSignCard key={sign} displayName={sign} />
        ))}
      </article>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const randomIndex = getRandomInt(0, 12);
  const randomZodiac = starSignList[randomIndex].sign;

  return {
    props: {
      randomZodiac,
    },
    revalidate: ONE_DAY_IN_SECONDS,
  };
};

export default Home;
