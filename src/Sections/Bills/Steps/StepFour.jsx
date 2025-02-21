import { useContext } from "react";
import { StepContext } from "../../../Contexts/StepContext";

const StepFour = () => {
  const { state, setState } = useContext(StepContext);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-200 text-gray-900">
        Cumulative Summary
      </h2>
      <div className="p-4 border rounded m-4 dark:text-gray-200 text-gray-900">
        <span>Total Items: {state.descriptions?.length || 0}</span>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              step: prevState.step - 1,
            }));
          }}
          className="border px-4 py-2 rounded dark:text-gray-200 text-gray-900">
          Back
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded ml-auto">
          Generate Bill
        </button>
      </div>
    </div>
  );
};

export default StepFour;
