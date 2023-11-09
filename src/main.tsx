import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ButtonsProvider } from "./context/ButtonsContext.tsx";
import { BasketProvider } from "./context/BasketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BasketProvider>
    <ButtonsProvider>
      <App />
    </ButtonsProvider>
  </BasketProvider>
);
