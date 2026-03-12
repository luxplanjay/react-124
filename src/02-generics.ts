/**
 * Узагальнені типи (generics)
 */

/* ---------- 1. Базова generic-функція ---------- */
function identity<T>(value: T): T {
  console.log(value);
  return value;
}

// identity<T>(value: T): T

// identity<number>(value: number): number
const n = identity<number>(42);

// identity<string>(value: string): string
const s = identity<string>("hello");

// identity<boolean>(value: boolean): boolean
const b = identity<boolean>(true);
console.log(n, s);

/* ---------- 2. Generics з масивами ---------- */
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// firstElement<T>(arr: T[]): T

// firstElement<number>(arr: number[]): number
const firstNum = firstElement<number>([10, 20, 30]);

// firstElement<string>(arr: string[]): string
const firstStr = firstElement<string>(["Alice", "Bob"]);

interface Car {
  id: number;
  price: number;
}

// firstElement<Car>(arr: Car[]): Car
const firstCar = firstElement<Car>([
  { id: 1, price: 100 },
  { id: 2, price: 200 },
]);

/* ---------- 3. Дженерик інтерфейс: узагальнений тип API відповіді ---------- */

// interface CreateUserRes {
//   data: User;
//   status: number;
//   succes: boolean;
// }

// interface GetTodosRes {
//   data: Todo[];
//   status: number;
//   sucess: boolean;
// }

interface ApiResponse<T> {
  data: T;
  status: number;
  sucess: boolean;
}

interface Todo {
  id: number;
  title: string;
}

const getTodosResponse: ApiResponse<Todo[]> = {
  data: [{ id: 1, title: "Learn generics" }],
  status: 200,
  sucess: true,
};
console.log(getTodosResponse.data[0].title);

interface User {
  id: string;
  username: string;
  score: number;
}

const createUserReponse: ApiResponse<User> = {
  data: { id: "some-id", username: "Jacob", score: 50 },
  status: 201,
  sucess: true,
};
console.log(createUserReponse.data.username);
