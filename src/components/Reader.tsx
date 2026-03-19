import { useState } from "react";

interface Article {
  id: number;
  title: string;
  body: string;
}

interface ReaderProps {
  items: Article[];
}

export default function Reader({ items }: ReaderProps) {
  const [itemIdx, setItemIdx] = useState(0);

  const currentArticle = items[itemIdx];

  const handlePrev = () => setItemIdx(itemIdx - 1);

  const handleNext = () => setItemIdx(itemIdx + 1);

  const isFirstItem = itemIdx === 0;
  const isLastItem = itemIdx === items.length - 1;

  return (
    <div>
      <h2>Reader</h2>
      <div>
        <button disabled={isFirstItem} onClick={handlePrev}>
          Prev
        </button>
        <button disabled={isLastItem} onClick={handleNext}>
          Next
        </button>
      </div>
      <p>
        Progress {itemIdx + 1}/{items.length}
      </p>

      <article>
        <h3>{currentArticle.title}</h3>
        <p>{currentArticle.body}</p>
      </article>
    </div>
  );
}
