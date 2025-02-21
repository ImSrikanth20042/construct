import { createContext, useState, useEffect } from "react";

// Create context
const StepContext = createContext();

const initialState = {
  state: {
    formData: {
      client: "",
      project: "",
      selectedItem: "",
      city: "",
      projectName: "",
      startDate: "",
    },
  },
  descriptions: [],
  step: 1,
};

const StepProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    // Check localStorage on initial load
    const savedState = localStorage.getItem("newBillState");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("newBillState", JSON.stringify(state));
  }, [state]);

  return (
    <StepContext.Provider value={{ state, setState }}>
      {children}
    </StepContext.Provider>
  );
};

export { StepContext, StepProvider };
