import styles from "./Options.module.css";

const Options = ({
  updateFeedback,
  feedbacksData,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <ul className={styles.optionBox}>
      {feedbacksData.map((item) => (
        <li key={item}>
          <button
            className={`${styles.optionButton} ${styles[item] || ""}`}
            onClick={() => updateFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button className={styles.resetButton} onClick={resetFeedback}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
