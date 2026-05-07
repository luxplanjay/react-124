import { getNotes } from '@/lib/api/clientApi';
import Link from 'next/link';

type Props = {
  params: Promise<{ categoryId: string }>;
};

export default async function NotesPage({ params }: Props) {
  const { categoryId } = await params;
  const category = categoryId === 'all' ? undefined : categoryId;
  const { notes } = await getNotes(category);

  return (
    <div>
      <h1>Notes by category page</h1>
      {notes?.length > 0 && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Link href={`/notes/${note.id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
