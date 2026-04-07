import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { createTask } from "../../services/taskService";

interface TaskFormProps {
  onEnd: () => void;
}

export default function TaskForm({ onEnd }: TaskFormProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onEnd();
    },
  });

  const handleSubmit = (formData: FormData) => {
    mutation.mutate({
      text: formData.get("text") as string,
    });
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {mutation.isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
