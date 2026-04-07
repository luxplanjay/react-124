import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task } from "../../types/task";
import css from "./TaskList.module.css";
import { deleteTask, updateTask } from "../../services/taskService";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  // delete
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError() {
      console.log("ERROR");
    },
  });

  // update
  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess() {
      console.log("Success updae");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={() =>
              updateMutation.mutate({ id: task.id, completed: !task.completed })
            }
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteMutation.mutate(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
