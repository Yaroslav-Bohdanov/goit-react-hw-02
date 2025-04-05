import styles from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={styles.feedbackList}>
      <p className={`${styles.feedbackItem} ${good > 0 ? styles.change : ""}`}>
        Good: {good}
      </p>
      <p
        className={`${styles.feedbackItem} ${neutral > 0 ? styles.change : ""}`}
      >
        Neutral: {neutral}
      </p>
      <p className={`${styles.feedbackItem} ${bad > 0 ? styles.change : ""}`}>
        Bad: {bad}
      </p>
      <p
        className={`${styles.feedbackItem} ${
          totalFeedback > 0 ? styles.change : ""
        }`}
      >
        Total: {totalFeedback}
      </p>
      <p
        className={`${styles.feedbackItem} ${
          positivePercentage > 0 ? styles.change : ""
        }`}
      >
        Positive: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
