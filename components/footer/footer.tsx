import DonationButton from "@components/button/donation";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        {" "}
        Made with 🧂 by <strong>Jin</strong>
        <span className={styles.divider}>|</span>
        <Link href="/about">
          <a className={styles.aboutLink}>About</a>
        </Link>
      </div>
      <div className={styles.donationButtonsContainer}>
        <DonationButton>Buy me Coffee ☕️</DonationButton>
        <DonationButton>Buy me Beer 🍺</DonationButton>
        <DonationButton className={styles.yachtButton}>
          Buy me a Yacht? ⛴
        </DonationButton>
      </div>
    </footer>
  );
};

export default Footer;
