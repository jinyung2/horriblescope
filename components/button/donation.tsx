import { AnchorHTMLAttributes, PropsWithChildren, useMemo } from "react";
import styles from "./donation.module.scss";

import cx from "classnames";
import { generateVenmoDeepLink } from "./donation.util";

type DonationButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
>;
const DonationButton: React.FC<DonationButtonProps> = ({
  children,
  ...props
}) => {
  const yachtDonationLink = generateVenmoDeepLink(
    "🛳⛴🚢 IM ON A BOAT",
    10000000
  );
  const coffeeDonationLink = generateVenmoDeepLink(
    "caffeine is the essence of life ☕️",
    5
  );
  const beerDonationLink = generateVenmoDeepLink(
    "beer is the actual essence of life 🍻",
    5
  );
  const isYacht = (children as string)?.includes("Yacht");
  const isBeer = (children as string)?.includes("Beer");
  const isCoffee = (children as string)?.includes("Coffee");

  const donationLink = useMemo(() => {
    if (isYacht) return yachtDonationLink;
    if (isBeer) return beerDonationLink;
    if (isCoffee) return coffeeDonationLink;
  }, [
    beerDonationLink,
    coffeeDonationLink,
    isBeer,
    isCoffee,
    isYacht,
    yachtDonationLink,
  ]);

  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={donationLink}
      {...props}
      className={cx(styles.donationButton, props.className)}
    >
      {children}
    </a>
  );
};

export default DonationButton;
