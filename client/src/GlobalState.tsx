import React, { createContext, useState, ReactNode, useContext, ReactElement } from "react";

// Define the shape of the state
interface ModalState {
  modal: ReactElement | null;
}

// Define the shape of the context, which includes the state and a setter function
interface ModalContextProps {
  modalState: ModalState;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

// Create the initial state for authentication
const initialModalState: ModalState = {
  modal: null,
};

// Create the context with a default value
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Create a provider component to wrap around the app or component tree
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>(initialModalState);

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook to use the AuthContext easily
export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};