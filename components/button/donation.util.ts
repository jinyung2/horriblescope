export const generateVenmoDeepLink = (note?: string, amount?: number) => {
  return `https://venmo.com/jinyung2?txn=pay&note=${
    note ?? "Horriblescope changed my life."
  }&amount=${amount ?? 5}`;
};
