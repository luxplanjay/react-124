import Link from "next/link";
import { getPosts } from "@/lib/api";
import { Metadata } from "next";

// export const metadata: Metadata = {
// title: "Recent posts",
// description: "A list of recent posts.",
// };

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getPosts();

  return {
    title: `Recent posts | ${data.total}`,
    description: "A list of recent posts.",
  };
};

export default async function Posts() {
  const data = await getPosts();
  return (
    <div>
      <h1>Recent posts {new Date().toLocaleTimeString()}</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
