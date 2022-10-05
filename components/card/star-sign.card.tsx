import Image from "next/image";
import Link from "next/link";
import { StarSign } from "../../types/star-sign.types";
import { Routes } from "../../utils/routes";

import styles from "./star-sign-card.module.scss";

type StarSignCardProps = {
  displayName: StarSign;
  imagePath: string;
};
const StarSignCard: React.FC<StarSignCardProps> = ({
  displayName,
  imagePath,
}) => {
  return (
    <article className={styles.starSignCard}>
      <Link href={Routes.starSign(displayName.toLowerCase()).index} passHref>
        <a className={styles.starSignLink}>
          {displayName}
          <Image
            src={imagePath}
            alt={displayName}
            width={50}
            height={50}
            className={styles.starSignImage}
          />
        </a>
      </Link>
    </article>
  );
};

export default StarSignCard;
