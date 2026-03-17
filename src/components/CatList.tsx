import CatInfo from "./CatInfo";
import { type Cat } from "../types/cat";

interface CatListProps {
  cats: Cat[];
}

export default function CatList({ cats }: CatListProps) {
  return (
    <ul>
      {cats.map((cat) => (
        <li key={cat.id}>
          <CatInfo info={cat} />
        </li>
      ))}
    </ul>
  );
}
