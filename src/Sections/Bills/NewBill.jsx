import { useContext } from "react";

import { StepContext } from "../../Contexts/StepContext";

import { StepOne, StepTwo, StepThree, StepFour } from "./Steps";

const NewBill = () => {
  const { state } = useContext(StepContext);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-10">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg">
        {state.step === 1 && <StepOne />}

        {state.step === 2 && <StepTwo />}

        {state.step === 3 && <StepThree />}

        {state.step === 4 && <StepFour />}
      </div>
    </div>
  );
};

export default NewBill;
