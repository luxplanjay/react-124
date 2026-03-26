import axios from "axios";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import Sidebar from "./Sidebar";

// const [person, setPerson] = useState(null);
// const [count, setCount] = useState(1);

// useEffect(() => {
//   async function getPerson() {
//     const response = await axios.get(
//       `https://swapi.info/api/people/${count}`,
//     );
//     setPerson(response.data);
//   }

//   getPerson();
// }, [count]);

// Монтує APP
// Виконується ефект HELLO
// Розмонтує App
// Монтує APP
// Виконується ефект HELLO

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebar-state");
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return false;
  });

  // state init > jsx > effect
  useEffect(() => {
    localStorage.setItem("sidebar-state", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <>
      <button onClick={() => setIsSidebarOpen(true)}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      {/* <button onClick={() => setVisible(!visible)}>Toggle</button> */}
      {/* {visible && <Timer />} */}
      {/* <h1>{person && person.name}</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button> */}
    </>
  );
}

// Відбувається рендер компонента
// React дивиться на зареєстровані ефекти
// Якщо на цьому рендері змінилось значення якоісь залежності ефекта
// то цей ефект викликається

// 1 рендер (mount)
// ініціалізуються стани
// jsx
// викликається ефект "HTTP request"
// оновлюється стан setPerson(response.data)
// стан person оновився > повторний рендер компонента App

// 2 рендер
// jsx
// ефект не викликається тому що count не змінився, змінився person
// я клікаю на оновлення count
// стан count оновився > повторний рендер компонента App

// 3 рендер
// jsx
// викликається ефект "HTTP request"
// оновлюється стан setPerson(response.data)
// стан person оновився > повторний рендер компонента App

// 4 рендер
// jsx
// ...
