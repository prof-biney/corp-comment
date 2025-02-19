import { useEffect, useState } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import { TFeedbackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = selectedCompany
    ? feedbackItems.filter(
        (feedBackItem) => feedBackItem.company === selectedCompany
      )
    : feedbackItems;

  const companyList = feedbackItems
    .map((item) => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index;
    });

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    const fetchFeedbackItems = async function () {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again");
      }
      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <div className="app">
      <Footer />

      <Container
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedbackItems={filteredFeedbackItems}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        handleSelectCompany={handleSelectCompany}
        companyList={companyList}
      />
    </div>
  );
}

export default App;
