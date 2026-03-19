import { createRoot } from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import "./index.css";

createRoot(document.querySelector("#root") as HTMLDivElement).render(<App />);
