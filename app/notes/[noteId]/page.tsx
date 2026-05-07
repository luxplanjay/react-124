// import { getSingleNote } from '@/lib/api/clientApi';
import { getServerSingleNote } from '@/lib/api/serverApi';

type Props = {
  params: Promise<{ noteId: string }>;
};

export default async function NotePage({ params }: Props) {
  const { noteId } = await params;
  const note = await getServerSingleNote(noteId);

  return (
    <div>
      <h1>Note page</h1>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
