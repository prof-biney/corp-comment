import { useFeedbackItemsContext } from "../lib/hooks";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      <li>
        <button
          onClick={() => {
            handleSelectCompany("");
          }}
        >
          #All
        </button>
      </li>

      {companyList.map((company) => (
        <HashtagItem
          key={company}
          onSelectCompany={handleSelectCompany}
          company={company}
        />
      ))}
    </ul>
  );
}
