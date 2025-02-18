import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedBackItem() {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>593</span>
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
