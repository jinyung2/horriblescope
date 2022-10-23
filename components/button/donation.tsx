import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import styles from "./donation.module.scss";

import cx from "classnames";

const DONATION_LINK =
  "https://www.paypal.com/donate/?business=EHCSNM6S9BV26&no_recurring=0&item_name=If+you+enjoyed+the+content+on+horriblescope%2C+feel+free+to+donate+to+give+me+more+motivation+to+do+this+on+the+weekend+%F0%9F%A4%B7&currency_code=USD";

const YACHT_DONATION_LINK =
  "https://www.paypal.com/donate/?business=EHCSNM6S9BV26&no_recurring=0&item_name=%F0%9F%9A%A2+%F0%9F%9B%B3+%E2%9B%B4+IM+ON+A+BOAT+%F0%9F%9A%A2+%F0%9F%9B%B3+%E2%9B%B4&currency_code=USD";

type DonationButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
>;
const DonationButton: React.FC<DonationButtonProps> = ({
  children,
  ...props
}) => {
  const isYacht = (children as string)?.includes("Yacht");
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={isYacht ? YACHT_DONATION_LINK : DONATION_LINK}
      {...props}
      className={cx(styles.donationButton, props.className)}
    >
      {children}
    </a>
  );
};

export default DonationButton;
