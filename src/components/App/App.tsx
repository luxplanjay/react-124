// import { useEffect, useState } from "react";
// import { useDebouncedCallback } from "use-debounce";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = useDebouncedCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
//     300,
//   );

//   useEffect(() => {
//     console.log(`Make HTTP req with ${inputValue}`);
//   }, [inputValue]);

//   return (
//     <div>
//       <input type="text" defaultValue={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p>
//     </div>
//   );
// }

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import type { SortOrder } from "../../types/task";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = useDebouncedCallback(setSearchQuery, 300);

  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", searchQuery, sortOrder],
    queryFn: () => getTasks(searchQuery, sortOrder),
  });

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox text={searchQuery} onSearch={handleSearch} />
        <SortFilter order={sortOrder} onSort={setSortOrder} />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>

      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}

      {data && !isLoading && <TaskList tasks={data} />}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onAddTask={closeModal} />
        </Modal>
      )}
    </div>
  );
}

// 500 tasks

// 200 tasks
// /tasks?search=learn&perPage=50
// totalPages 4
