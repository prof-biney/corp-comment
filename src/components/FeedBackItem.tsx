import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export default function FeedBackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>B</p>
      </div>

      <div>
        <p>ByteGrad</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          recusandae! Blanditiis nobis illo dolores at.
        </p>
      </div>

      <p>4d</p>
    </li>
  );
}
