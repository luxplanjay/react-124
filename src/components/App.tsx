import { useState } from "react";
import { Bars } from "react-loader-spinner";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import type { Article } from "../types/article";
import { getArticles } from "../services/articleSerivce";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchArticles = async (searchTopic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const newArticles = await getArticles(searchTopic);
      setArticles(newArticles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={fetchArticles} />
      {/* {isLoading && <>Loading articles, please wait...</
      strong>} */}
      {isLoading && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {isError && <strong>Та капець це помилка все пропало!!!!!</strong>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
