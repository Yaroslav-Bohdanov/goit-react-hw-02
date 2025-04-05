import { useEffect, useState } from "react";
import Description from "./src/components/Description";
import Options from "./src/components/Options";
import Feedback from "./src/components/Feedback";
import Notification from "./src/components/Notification";
import styles from "./src/components/Container.module.css";

function App() {
  const initialState = { good: 0, neutral: 0, bad: 0 };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : initialState;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, item) => acc + item,
    0
  );

  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  // 🔹 Додаємо масив типів фідбеку
  const feedbacksData = Object.keys(initialState);

  return (
    <div className={styles.container}>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        feedbacksData={feedbacksData} // Передаємо список кнопок
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          {...feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}

export default App;
