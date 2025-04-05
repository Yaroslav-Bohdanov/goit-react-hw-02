import styles from "./Description.module.css";

const Description = () => {
  return (
    <section className={styles.descriptionContainer}>
      <h2 className={styles.title}>Sip Happens Café</h2>
      <p className={styles.subtitle}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </section>
  );
};

export default Description;
