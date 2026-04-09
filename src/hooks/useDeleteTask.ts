import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Task } from "../types/task";

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete<Task>(`/tasks/${taskId}`);
  return res.data;
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
