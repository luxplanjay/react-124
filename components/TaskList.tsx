import { deleteTask, Task } from "@/api/tasks-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "inline-flex",
            gap: 4,
            border: "1px solid black",
            padding: 4,
          }}
        >
          <p>{task.text}</p>
          <button onClick={() => mutation.mutate(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
