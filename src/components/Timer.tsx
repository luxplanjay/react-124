/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

// Монтує Timer
// Виконується ефект Interval + запамятав cleanup
// Розмонтує Timer + cleanup()
// Монтує Timer + запамятав cleanup
// Виконується ефект Interval
// Розмонтує Timer + cleanup()

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("mount");
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log(`Interval ${Date.now()}`);
    }, 1000);

    return function cleanup() {
      console.log("unmount");
      clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
