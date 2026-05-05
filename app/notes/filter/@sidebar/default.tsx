import Link from "next/link";
import { getCategories } from "@/lib/api";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Link href="/notes/create">Create Note</Link>
      <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
        <li>
          <Link href={`/notes/filter/all`}>All notes</Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesSidebar;
