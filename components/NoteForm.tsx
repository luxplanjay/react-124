'use client';

import { useRouter } from 'next/navigation';
import { Category, createNote, NewNoteData } from '@/lib/api/clientApi';
import { useMutation } from '@tanstack/react-query';

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push('/notes/filter/all');
    },
    onError(error) {
      console.error('Failed to create note:', error);
    },
  });

  const handleCancel = () => {
    router.push('/notes/filter/all');
  };

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);
  };

  return (
    <form action={handleSubmit}>
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <label>
        Content
        <textarea name="content"></textarea>
      </label>

      <label>
        Category
        <select name="categoryId">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <div>
        <button type="submit">Create</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
