import { getPostById } from "@/lib/api";
type Props = {
  params: Promise<{ postId: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { postId } = await params;
  const post = await getPostById(Number(postId));

  return {
    title: post.title,
    openGraph: {
      type: "website",
      url: `http://localhost:3000/posts/${postId}`,
      title: post.title,
      description: "Post details page",
      siteName: "Post App",
      // image: [{ url: post.imgUrl, width: 1200, height: 630, alt: post.title }],
    },
  };
};

export default async function Post({ params }: Props) {
  const { postId } = await params;
  const post = await getPostById(Number(postId));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Tags: {post.tags.join(", ")}</p>
      <p>
        Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}
      </p>
      <p>Views: {post.views}</p>
    </div>
  );
}
