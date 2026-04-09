import axios from "axios";
import type { NewTask, SortOrder, Task, TaskUpdate } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async (searchText: string, sortOrder: SortOrder) => {
  const res = await axios.get<Task[]>("/tasks", {
    params: {
      search: searchText,
      sortBy: "completed",
      order: sortOrder,
    },
  });
  return res.data;
};

export const createTask = async (newTask: NewTask) => {
  const res = await axios.post<Task>("/tasks", newTask);
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete<Task>(`/tasks/${taskId}`);
  return res.data;
};

export const updateTask = async (taskUpdate: TaskUpdate) => {
  const res = await axios.put<Task>(`/tasks/${taskUpdate.id}`, taskUpdate);
  return res.data;
};
