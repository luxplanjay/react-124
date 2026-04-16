import axios from "axios";

export interface Task {
  text: string;
  completed: boolean;
  createdAt: number;
  id: string;
}

export const getTasks = async (text: string) => {
  const res = await axios.get<Task[]>(
    "https://62584f320c918296a49543e7.mockapi.io/tasks",
    {
      params: {
        search: text,
      },
    },
  );
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete(
    `https://62584f320c918296a49543e7.mockapi.io/tasks/${taskId}`,
  );
  return res.data;
};
