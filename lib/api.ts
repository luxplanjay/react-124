interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const getPosts = async () => {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = (await res.json()) as PostsResponse;
  return data;
};

export const getPostById = async (postId: number) => {
  const res = await fetch(`https://dummyjson.com/posts/${postId}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  const data = (await res.json()) as Post;
  return data;
};
