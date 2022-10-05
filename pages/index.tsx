import type { NextPage } from "next";
import HorribleScopeLogo from "../components/logo/logo";

import styles from "./index.module.scss";

import { starSignList } from "../utils/constants";
import StarSignCard from "../components/card/star-sign.card";

import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";
import AquariusSvg from "../public/images/aquarius.svg";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <header>
        <HorribleScopeLogo />
      </header>
      <article>
        {starSignList.map(({ sign, imageName }) => (
          <StarSignCard
            key={sign}
            displayName={sign}
            imagePath={`/images/${imageName}`}
          />
        ))}
      </article>
    </main>
  );
};

export default Home;
