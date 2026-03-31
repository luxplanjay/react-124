interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    if (topic === "") {
      return alert("Please enter search topic!");
    }
    onSubmit(topic);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
