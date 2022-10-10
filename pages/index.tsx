import type { NextPage } from "next";
import HorribleScopeLogo from "../components/logo/logo";

import styles from "./index.module.scss";

import { starSignList } from "../utils/constants";
import StarSignCard from "../components/card/star-sign.card";
import Footer from "@components/footer/footer";

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.container}>
        <header>
          <HorribleScopeLogo />
        </header>
        <section className={styles.mainTextSection}>
          <h6>
            Horoscopes are dumb, so here are some horrible ones to share with
            that annoying{" "}
            <strong>&ldquo;OMG you&apos;re such a Gemini!&rdquo;</strong>{" "}
            friend.
          </h6>
        </section>
        <article className={styles.starSignContainer}>
          {starSignList.map(({ sign }) => (
            <StarSignCard key={sign} displayName={sign} />
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
