import Image from "next/image";
import Link from "next/link";
import { StarSign } from "../../types/star-sign.types";
import { Routes } from "../../utils/routes";
import StarSignSvg from "../svg/star-sign-svg";

import styles from "./star-sign-card.module.scss";

type StarSignCardProps = {
  displayName: StarSign;
};
const StarSignCard: React.FC<StarSignCardProps> = ({ displayName }) => {
  return (
    <div className={styles.starSignCard}>
      <Link href={Routes.starSign(displayName.toLowerCase()).index} passHref>
        <a className={styles.starSignLink}>
          <h6>{displayName}</h6>
          <StarSignSvg starSign={displayName} />
        </a>
      </Link>
    </div>
  );
};

export default StarSignCard;
