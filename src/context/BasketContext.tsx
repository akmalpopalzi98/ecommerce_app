import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { ItemProps } from "../components/Item";

// Define types for context values
type BasketContextType = {
  basketContent: ItemProps[];
  setBasketContent: Dispatch<SetStateAction<ItemProps[]>>;
};

const initialContextValue: BasketContextType = {
  basketContent: [], // initial text value
  setBasketContent: () => {}, // a dummy function to avoid errors
};

// Create a context with initial values
const BasketContext = createContext<BasketContextType>(initialContextValue);

// Create a context provider component
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basketContent, setBasketContent] = useState<ItemProps[]>([]);

  const contextValue: BasketContextType = {
    basketContent,
    setBasketContent,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
