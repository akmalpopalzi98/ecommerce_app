import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define types for context values
type ButtonsContextType = {
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
};

const initialContextValue: ButtonsContextType = {
  size: "", // initial text value
  setSize: () => {}, // a dummy function to avoid errors
};

// Create a context with initial values
const ButtonsContext = createContext<ButtonsContextType>(initialContextValue);

// Create a context provider component
const ButtonsProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<string>("");

  const contextValue: ButtonsContextType = {
    size,
    setSize,
  };

  return (
    <ButtonsContext.Provider value={contextValue}>
      {children}
    </ButtonsContext.Provider>
  );
};

export { ButtonsProvider, ButtonsContext };
