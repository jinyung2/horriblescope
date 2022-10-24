import Link from "next/link";
import styles from "./main-page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

type MainPageNavigationButtonProps = {
  text?: string;
};
const MainPageNavigationButton: React.FC<MainPageNavigationButtonProps> = ({
  text,
}) => {
  return (
    <Link href="/">
      <span className={styles.backLink}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>{text ?? "Back to Horoscopes"}</span>
      </span>
    </Link>
  );
};

export default MainPageNavigationButton;
