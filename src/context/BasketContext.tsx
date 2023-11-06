import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ItemProps } from "../components/Item";

// Define types for context values
type BasketContextType = {
  basketContent: ItemProps[];
  setBasketContent: Dispatch<SetStateAction<ItemProps[]>>;
  itemQuantity: ItemProps[];
  setItemQuantity: Dispatch<SetStateAction<ItemProps[]>>;
};

const initialContextValue: BasketContextType = {
  basketContent: [],
  setBasketContent: () => {},
  itemQuantity: [],
  setItemQuantity: () => {},
};

// Create a context with initial values
const BasketContext = createContext<BasketContextType>(initialContextValue);

// Create a context provider component
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basketContent, setBasketContent] = useState<ItemProps[]>([]);
  const [itemQuantity, setItemQuantity] = useState<ItemProps[]>([]);

  // Update itemQuantity whenever basketContent changes
  useEffect(() => {
    setItemQuantity([...basketContent]);
  }, [basketContent]);

  const contextValue: BasketContextType = {
    basketContent,
    setBasketContent,
    itemQuantity,
    setItemQuantity,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
