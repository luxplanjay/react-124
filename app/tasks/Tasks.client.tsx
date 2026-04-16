"use client";

import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getTasks } from "@/api/tasks-api";
import { useQuery } from "@tanstack/react-query";
import TaskList from "@/components/TaskList";

export default function TasksClient() {
  const [searchText, setSearchText] = useState("");

  console.log(
    "Тут useQuery при монтуванні просто використало дані із кеша queryClient для ['tasks', '']",
  );
  const { data: tasks, isPending } = useQuery({
    queryKey: ["tasks", searchText],
    queryFn: () => getTasks(searchText),
  });

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSearchText(event.target.value),
    300,
  );

  return (
    <div>
      <h1>Tasks {isPending && "Loading..."}</h1>
      <input type="text" defaultValue={searchText} onChange={handleChange} />
      {tasks && tasks.length > 0 && <TaskList tasks={tasks} />}
    </div>
  );
}
