/**
 * Типізація промісів
 *
 * Явна типізація `Promise<T>` і використання `.then` з типізованими результатами
 */

/* ---------- 1. Promise<> ---------- */
function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 300);
  });
}

getData().then((value) => console.log(value));

/* ---------- 2. Promise<T> з об'єктом ---------- */
interface User {
  id: number;
  name: string;
}

const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 300);
  });
};

getUser().then((u) => u.name);

/* ---------- 3. Promise<T> з масивом об'єктів ---------- */

const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ]),
      300,
    );
  });
};

getUsers().then((users) => users.map((u) => u.name));
