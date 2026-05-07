import NoteForm from '@/components/NoteForm';
import { getCategories } from '@/lib/api/clientApi';

export default async function CreateNotePage() {
  const categories = await getCategories();

  return (
    <div>
      <h1>Create Note</h1>
      <NoteForm categories={categories} />
    </div>
  );
}
