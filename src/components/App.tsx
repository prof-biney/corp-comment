import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import FeedbackItemContextProvider from "./contexts/FeedbackItemContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbackItemContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemContextProvider>
    </div>
  );
}

export default App;
