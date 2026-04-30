"use client";

import {
  selectCounter,
  selectIncrement,
  useCounterStore,
} from "@/stores/counterStore";

export default function ClickCounter() {
  const counterValue = useCounterStore(selectCounter);
  const increment = useCounterStore(selectIncrement);

  return <button onClick={increment}>{counterValue}</button>;
}
