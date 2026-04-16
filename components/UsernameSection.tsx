"use client";

import { useState } from "react";

export default function UsernameSection() {
  const [count, setCount] = useState(0);

  console.log("UsernameSection");

  return (
    <section>
      <h2>Edit username</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </section>
  );
}
