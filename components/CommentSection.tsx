"use client";

export default function CommentSection() {
  const handleSubmit = (formData: FormData) => {
    console.log(formData.get("message"));
  };

  console.log("CommentSection");

  return (
    <section>
      <h2>Comments</h2>
      <form action={handleSubmit}>
        <input type="text" name="message" />
        <button>Submit</button>
      </form>
    </section>
  );
}
