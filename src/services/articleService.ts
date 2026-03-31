import axios from "axios";
import { type Article } from "../types/article";

interface ArticlesHttpResponse {
  hits: Article[];
  nbPages: number;
}

export const fetchArticles = async (topic: string, page: number = 1) => {
  const response = await axios.get<ArticlesHttpResponse>(
    "https://hn.algolia.com/api/v1/search",
    {
      params: {
        query: topic,
        page,
        hitsPerPage: 10,
      },
    },
  );

  return response.data;
};
