import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchArticles } from "../services/articleService";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import { useState } from "react";
import ReactPaginateModule from "react-paginate";
import { type ReactPaginateProps } from "react-paginate";
import { type ComponentType } from "react";
import css from "./App.module.css";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

export default function App() {
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isSuccess } = useQuery({
    queryKey: ["articles", topic, currentPage],
    queryFn: () => fetchArticles(topic, currentPage),
    enabled: topic !== "",
    placeholderData: keepPreviousData,
  });

  const handleSearch = (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);
  };

  const totalPages = data?.nbPages ?? 0;

  return (
    <>
      <SearchForm onSubmit={handleSearch} />

      {data && <ArticleList items={data.hits} />}

      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={({ selected }) => setCurrentPage(selected + 1)}
          forcePage={currentPage - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="->"
          previousLabel="<-"
        />
      )}
    </>
  );
}
