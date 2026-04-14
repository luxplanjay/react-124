import CommentSection from "@/components/CommentSection";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function PostDetails(props: Props) {
  console.log("PostDetails");
  const params = await props.params;

  const res = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <CommentSection />
    </div>
  );
}
