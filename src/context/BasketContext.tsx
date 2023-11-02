import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define types for context values
type BasketContextType = {
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
};

const initialContextValue: BasketContextType = {
  size: "", // initial text value
  setSize: () => {}, // a dummy function to avoid errors
};

// Create a context with initial values
const BasketContext = createContext<BasketContextType>(initialContextValue);

// Create a context provider component
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<string>("");

  const contextValue: BasketContextType = {
    size,
    setSize,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
