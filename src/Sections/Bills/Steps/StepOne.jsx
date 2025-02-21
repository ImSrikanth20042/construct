// StepOne.jsx
import { useContext, useState } from "react";
import { StepContext } from "../../../Contexts/StepContext";
import { Link } from "react-router-dom";
import { AddProject } from "../../../Modals";

const StepOne = () => {
  const { state, setState } = useContext(StepContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <h2 className="text-lg font-semibold mb-4">Select Client & Project</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <select
          name="client"
          value={state.formData?.client}
          onChange={handleChange}
          className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300">
          <option value="">Select Client</option>
          <option value="A">Client A</option>
          <option value="B">Client B</option>
        </select>
        <Link
          to="/c-client"
          className="bg-blue-600 text-white px-4 py-2 rounded ml-auto">
          Add Client
        </Link>
        <select
          name="project"
          value={state.formData?.project}
          onChange={handleChange}
          className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300">
          <option value="">Select Project</option>
          <option value="con">Construction</option>
          <option value="engg">Engineering</option>
        </select>
        <div
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer ml-auto"
          onClick={() => setIsModalOpen(true)}>
          Add Project
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              step: prevState.step + 1,
            }));
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded ml-auto">
          Next
        </button>
      </div>
      {isModalOpen && <AddProject setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default StepOne;
