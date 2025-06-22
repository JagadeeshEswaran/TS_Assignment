import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSessionValid, setSessionValidity] = useState(
    !!JSON.parse(sessionStorage.getItem("authToken")) ? true : false
  );
  const [isLoading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ isSessionValid, setSessionValidity, isLoading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
