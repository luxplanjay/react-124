import axios from "axios";
import type { Task } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async () => {
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
};

// <!-- POST /tasks {} -->

interface NewTask {
  text: string;
}

export const createTask = async (newTask: NewTask) => {
  const res = await axios.post<Task>("/tasks", newTask);
  return res.data;
};

// <!-- DELETE /tasks/767 -->

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete<Task>(`/tasks/${taskId}`);
  return res.data;
};

// <!-- PATCH /tasks/767 {}  -->

interface TaskUpdate {
  id: string;
  text?: string;
  completed?: boolean;
}

export const updateTask = async (taskUpdate: TaskUpdate) => {
  const res = await axios.put<Task>(`/tasks/${taskUpdate.id}`, taskUpdate);
  return res.data;
};
