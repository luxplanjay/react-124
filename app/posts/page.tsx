// localhost:300/posts
// Компонент Posts виконується на Next Server
// робить fetch
// після fetch jsx > html

import Link from "next/link";

export default async function Posts() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return (
    <div>
      <h1>Posts page</h1>

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

// localhost:3000/posts

// localhost:3000/posts/1
// localhost:3000/posts/2
// localhost:3000/posts/3
// localhost:3000/posts/t1351
// localhost:3000/posts/j6u3rg3rg

// app/posts/[postId]/page.tsx
