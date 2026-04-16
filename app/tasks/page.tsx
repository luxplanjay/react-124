import { getTasks } from "@/api/tasks-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TasksClient from "./Tasks.client";

// 1) /tasks виконується Tasks на сервері
// 2) виконується queryClient.prefetchQuery
//    і відбувається http запит getTasks("")
// 3) результат запиту зберігається всередині queryClient
// 4) За допомогою HydrationBoundary ми передаємо queryClient
//   вкладеним компонентам
// 5) В браузері виконується TasksClient
// 6) Коли викликається перший раз useQuery то не відбувається
// http запиту, тому що для  ["tasks", ""]
// дані вже є в  queryClient і useQuery просто бере іх
// і повертає як data

export default async function Tasks() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks", ""],
    queryFn: () => getTasks(""),
  });

  console.log(
    "queryClient.prefetchQuery відбувся на Next сервері і дані для ['tasks', ''] вже є в queryClient",
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TasksClient />
    </HydrationBoundary>
  );
}
