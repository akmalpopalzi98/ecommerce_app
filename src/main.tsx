import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ButtonsProvider } from "./context/ButtonsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ButtonsProvider>
    <App />
  </ButtonsProvider>
);
