import styles from "./logo.module.scss";

const HorribleScopeLogo: React.FC = () => {
  return (
    <h1 className={styles.logo}>
      Hor
      <span className={styles.outer}>
        (<span className={styles.innerTitle}>-ri ble</span>)
      </span>
      <span>scope</span>
    </h1>
  );
};

export default HorribleScopeLogo;
