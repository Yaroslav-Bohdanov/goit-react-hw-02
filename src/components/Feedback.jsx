import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalPoints, positive }) => {
  return (
    <div className={styles.feedbackList}>
      <p className={(styles.feedbackItem, good > 0 && styles.change)}>
        Good:{good}
      </p>
      <p className={(styles.feedbackItem, neutral > 0 && styles.change)}>
        Neutral:{neutral}
      </p>
      <p className={(styles.feedbackItem, bad > 0 && styles.change)}>
        Bad:{bad}
      </p>
      <p className={(styles.feedbackItem, totalPoints > 0 && styles.change)}>
        Total:{totalPoints}
      </p>
      <p className={(styles.feedbackItem, positive > 0 && styles.change)}>
        Positive:{positive}%
      </p>
    </div>
  );
};

export default Feedback;
