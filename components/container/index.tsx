import { PropsWithChildren } from "react";

import { motion } from "framer-motion";

import styles from "./container.module.scss";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
};

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className={styles.container}
    >
      {children}
    </motion.main>
  );
};

export default Container;
