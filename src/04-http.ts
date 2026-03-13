/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

import axios from "axios";

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

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const getAllPosts = async (): Promise<GetPostsResponse> => {
  const response = await axios.get<GetPostsResponse>(
    "https://dummyjson.com/posts",
  );

  return response.data;
};

export const getPostById = async (postId: Post["id"]): Promise<Post> => {
  const response = await axios.get<Post>(
    `https://dummyjson.com/posts/${postId}`,
  );
  return response.data;
};

type NewPostData = Pick<Post, "title" | "body">;

export const createPost = async (newPost: NewPostData): Promise<Post> => {
  const response = await axios.post<Post>(
    "https://dummyjson.com/posts/add",
    newPost,
  );
  return response.data;
};

// createPost({ title: "Some title", body: "Some body" }).then(
//   (newPost) => newPost.reactions,
// );

// const getSomeData = async () => {
//   const res = await fetch("");
//   const json = (await res.json()) as User;
// };
