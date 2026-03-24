import axios from "axios";
import type { Article } from "../types/article";

interface GetArticlesRes {
  hits: Article[];
}

export const getArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<GetArticlesRes>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`,
  );
  return response.data.hits;
};
