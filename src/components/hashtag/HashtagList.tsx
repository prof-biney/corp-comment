import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
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

      {/* <li>
        <button>#BlackGold</button>
      </li>
      <li>
        <button>#Land Rover</button>
      </li>
      <li>
        <button>#Red Magic</button>
      </li> */}
    </ul>
  );
}
