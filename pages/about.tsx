import ShareButtons from "@components/share";
import MainLayout from "@layouts/main-layout";
import { NextPage } from "next";
import styles from "./about.module.scss";
import MainPageNavigationButton from "@components/navigation/main-page";

const AboutPage: NextPage = () => {
  return (
    <MainLayout
      title="About | Hor(rible)scope"
      metaDescription="Horriblescope is a horrible, AI-generated horoscope prediction site made as a side project."
    >
      <article className={styles.aboutPage}>
        <MainPageNavigationButton />
        <h1>About</h1>
        <div className={styles.shareButtonsContainer}>
          <ShareButtons title="Hor(rible)scope About Page" />
        </div>
        <p>
          Hey, I&apos;m Jin and I work as a Software Engineer, mostly front end
          stuff. This is a fun little side project I&apos;m working on that
          utilizes OpenAI technology to generate satirical, profanity-laced
          horoscope predictions.
        </p>
        <p>
          If you found it funny, please share it with your friends, family,
          enemies, strangers on public transit, boss, social media following,
          estranged family members, etc...
        </p>
        <p>
          If you want to make suggestions, complaints, or just want to reach
          out, you can connect with me via{" "}
          <a
            target="_blank"
            rel="noopener no referrer noreferrer"
            href="https://linkedin.com/in/jin-yung-choi"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            rel="noopener no referrer noreferrer"
            href="mailto:jinyoungchoi118@gmail.com"
          >
            email
          </a>
          .
        </p>
      </article>
    </MainLayout>
  );
};

export default AboutPage;
