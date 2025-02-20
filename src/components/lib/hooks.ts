import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);

  if (!context)
    throw new Error("FeedbackItemsContext is not defined in component");

  return context;
}
