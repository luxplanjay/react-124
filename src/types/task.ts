export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface NewTask {
  text: string;
}

export interface TaskUpdate {
  id: string;
  text?: string;
  completed?: boolean;
}

export type SortOrder = "asc" | "desc";
