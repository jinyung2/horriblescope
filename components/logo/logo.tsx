import styles from "./logo.module.scss";

const HorribleScopeLogo: React.FC = () => {
  return (
    <h1>
      Hor
      <span className={styles.outer}>
        (<span className={styles.innerTitle}>-ri ble</span>)
      </span>
      scope
    </h1>
  );
};

export default HorribleScopeLogo;
