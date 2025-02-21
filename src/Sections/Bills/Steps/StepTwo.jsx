import { useContext } from "react";
import { StepContext } from "../../../Contexts/StepContext";

const StepTwo = () => {
  const { state, setState } = useContext(StepContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="city"
          value={state.formData?.city}
          onChange={handleChange}
          placeholder="City"
          className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300"
        />
        <input
          type="text"
          name="projectName"
          value={state.formData?.projectName}
          onChange={handleChange}
          placeholder="Project Name"
          className="border p-2 rounded w-full dark:text-gray-100 dark:bg-gray-600 text-gray-900 bg-gray-300"
        />
        <input
          type="date"
          name="startDate"
          value={state.formData?.startDate}
          onChange={handleChange}
          className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              step: prevState.step - 1,
            }));
          }}
          className="border px-4 py-2 rounded bg-gray-900 dark:bg-gray-100">
          Back
        </button>
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              step: prevState.step + 1,
            }));
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
