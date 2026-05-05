import { getSingleNote } from "@/lib/api";

type Props = {
  params: Promise<{ noteId: string }>;
};

export default async function NotePage({ params }: Props) {
  const { noteId } = await params;
  const note = await getSingleNote(noteId);

  return (
    <div>
      <h1>Note page</h1>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
