import { createRoot } from "react-dom/client";
import App from "./components/App/App";

createRoot(document.querySelector("#root") as HTMLDivElement).render(<App />);
