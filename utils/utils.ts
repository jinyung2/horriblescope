/**
 * Capitalize a single word
 */
export const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const getRandomInt = (min: number, max: number) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};
