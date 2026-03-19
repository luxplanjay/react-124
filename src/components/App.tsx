import { useState } from "react";
import ClickCounter from "./ClickCounter";
import InventoryTracker from "./InventoryTracker";
import Reader from "./Reader";
import articles from "../articles.json";

export default function App() {
  const [counter, setCounter] = useState<number>(0);

  const updateCounter = () => setCounter(counter + 1);

  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);

  const toggleText = () => setIsTextVisible(!isTextVisible);

  return (
    <>
      <Reader items={articles} />

      <hr />
      <InventoryTracker />

      <hr />
      <ClickCounter value={counter} onUpdate={updateCounter} />
      <ClickCounter value={counter} onUpdate={updateCounter} />
      <ClickCounter value={counter} onUpdate={updateCounter} />

      <hr />
      <button onClick={toggleText}>{isTextVisible ? "Hide" : "Show"}</button>
      {isTextVisible && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          magnam nesciunt excepturi enim ipsam labore voluptates quia iure
          laudantium, placeat, atque provident qui quidem perspiciatis ut
          tenetur ratione earum? Voluptatum!
        </p>
      )}
    </>
  );
}

// render 1 > App() > create state 0 > render jsx
// setCounter(0 + 1) > state update > count = 1
// render 2 > App() > return state 1 > render jsx
// setCounter(1 + 1) > state update > count = 2
// render 3 > App() > return state 2 > render jsx
