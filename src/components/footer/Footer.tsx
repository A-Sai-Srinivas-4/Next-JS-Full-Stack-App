import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sai</div>
      <div className={styles.text}>
        Sai creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
