import { useEffect, useState } from "react";
import FeedBackItem from "./FeedBackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFeedbackItems = async function () {
    try {
      setIsLoading(true);

      const res = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!res.ok) throw new Error();

      const data = await res.json();
      setFeedbackItems(data.feedbacks);
      console.log(data.feedbacks);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((feedbackItem) => (
        <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
