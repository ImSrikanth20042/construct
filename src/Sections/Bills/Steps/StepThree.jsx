import { useContext } from "react";
import { StepContext } from "../../../Contexts/StepContext";
import { Close } from "@mui/icons-material";
import { items, units } from "./index";

const StepThree = () => {
  const { state, setState } = useContext(StepContext);

  const getUnits = (work) => {
    if (work.includes("Excavation") || work.includes("Backfilling")) {
      return units.length;
    } else if (work.includes("Concrete") || work.includes("Plaster")) {
      return units.volume;
    } else if (work.includes("Steel") || work.includes("Cement")) {
      return units.weight;
    } else if (work.includes("Tile") || work.includes("Flooring")) {
      return units.area;
    } else if (work.includes("Fabrication") || work.includes("Shuttering")) {
      return units.runningLength;
    } else {
      return units.length;
    }
  };

  const addItem = () => {
    if (!state.formData?.selectedItem) {
      console.log("No selected item found!");
      return;
    }

    setState((prev) => {
      const descriptions = Array.isArray(prev.descriptions)
        ? prev.descriptions
        : [];

      // Avoid duplicates
      if (
        descriptions.some((desc) => desc.title === prev.formData.selectedItem)
      ) {
        console.log("Item already exists in descriptions.");
        return prev;
      }

      const newDescription = {
        id: descriptions.length + 1,
        title: prev.formData.selectedItem,
        description: "",
        briefs: [],
        showDescription: [], // Open description form by default
      };

      return {
        ...prev,
        descriptions: [...descriptions, newDescription],
      };
    });
  };

  // Function to add a new description dynamically
  const addDescription = (descId) => {
    setState((prev) => ({
      ...prev,
      descriptions: prev.descriptions.map((desc) =>
        desc.id === descId
          ? {
              ...desc,
              showDescription: [
                ...(Array.isArray(desc.showDescription)
                  ? desc.showDescription
                  : []),
                {
                  id: (desc.showDescription?.length || 0) + 1,
                },
              ],
            }
          : desc,
      ),
    }));
  };

  const removeDescription = (descId, descriptionId) => {
    setState((prev) => ({
      ...prev,
      descriptions: prev.descriptions.map((desc) =>
        desc.id === descId
          ? {
              ...desc,
              showDescription: desc.showDescription.filter(
                (description) => description.id !== descriptionId,
              ),
            }
          : desc,
      ),
    }));
  };

  const removeItem = (descId) => {
    setState((prev) => ({
      ...prev,
      descriptions: prev.descriptions.filter((desc) => desc.id !== descId),
    }));
  };

  const addBrief = (descId) => {
    setState((prev) => ({
      ...prev,
      descriptions: prev.descriptions.map((desc) =>
        desc.id === descId
          ? {
              ...desc,
              briefs: [
                ...desc.briefs,
                {
                  id: desc.briefs.length + 1,
                  floor: "",
                  length: "",
                  width: "",
                  height: "",
                  number: "",
                  quantity: "",
                },
              ],
            }
          : desc,
      ),
    }));
  };
  // Handle brief change
  const handleBriefChange = (e, descId, briefId) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      descriptions: prevState.descriptions.map((desc) =>
        desc.id === descId
          ? {
              ...desc,
              briefs: desc.briefs.map((brief) =>
                brief.id === briefId ? { ...brief, [name]: value } : brief,
              ),
            }
          : desc,
      ),
    }));
  };
  // Remove Brief
  const removeBrief = (descId, briefId) => {
    setState((prev) => ({
      ...prev,
      descriptions: prev.descriptions.map((desc) =>
        desc.id === descId
          ? {
              ...desc,
              briefs: desc.briefs.filter((brief) => brief.id !== briefId),
            }
          : desc,
      ),
    }));
  };

  const handleDescriptionChange = (e, descId, descIndex) => {
    const { value } = e.target;

    setState((prev) => ({
      ...prev,
      descriptions: prev.descriptions.map((desc) =>
        desc.id === descId
          ? {
              ...desc,
              showDescription: desc.showDescription.map((d, index) =>
                index === descIndex ? { ...d, text: value } : d,
              ),
            }
          : desc,
      ),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [name]: value,
      },
    }));
    console.log("Updated Form Data", state.state.formData);
  };
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-200 text-gray-900">
        Item / Work
      </h2>
      <select
        name="selectedItem"
        value={state.formData?.selectedItem || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300 mb-4">
        <option value="">Select Item</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="flex justify-end mb-6">
        <button
          onClick={addItem}
          className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </div>

      <div className="overflow-x-auto grid gap-6 whitespace-nowrap space-x-4 pb-4 grid-cols-2">
        {state.descriptions.map((desc, descIndex) => (
          <div
            key={desc.id}
            className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 min-w-[250px] flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold dark:text-gray-300 text-gray-800">
                {desc.title} - {descIndex + 1}
              </h3>

              <button type="button" onClick={() => removeItem(desc.id)}>
                <Close />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <select
                name="unit"
                value={desc.unit || ""}
                onChange={(e) => handleDescriptionChange(e, desc.id)}
                className="border p-2 rounded w-full dark:bg-gray-700 bg-gray-300">
                <option value="">Select Unit</option>
                {getUnits(desc.title).map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="baseRate"
                value={desc.baseRate || ""}
                onChange={(e) => handleDescriptionChange(e, desc.id)}
                placeholder="Base Rate"
                className="border p-2 rounded w-full dark:bg-gray-700 bg-gray-300"
              />
            </div>

            {(Array.isArray(desc.showDescription)
              ? desc.showDescription
              : []
            ).map((description, index) => (
              <div
                className="border p-4 rounded bg-white dark:bg-gray-700 mb-4"
                key={index}>
                <div className="flex justify-between">
                  <h4 className="text-md font-semibold dark:text-gray-300 text-gray-800">
                    Description - {description.id}
                  </h4>
                  <button
                    onClick={() => removeDescription(desc.id, description.id)}>
                    <Close />
                  </button>
                </div>
                <div className="flex-grow mt-4">
                  {desc.briefs.map((brief) => (
                    <div
                      key={brief.id}
                      className="border p-4 rounded bg-white dark:bg-gray-700 mb-4">
                      <div className="flex justify-between">
                        <h4 className="text-md font-semibold dark:text-gray-300 text-gray-800">
                          Brief {brief.id}
                        </h4>
                        <button onClick={() => removeBrief(desc.id, brief.id)}>
                          <Close />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <input
                          type="text"
                          name="floor"
                          placeholder="Floor"
                          value={brief.floor}
                          onChange={(e) =>
                            handleBriefChange(e, desc.id, brief.id)
                          }
                          className="border p-2 rounded dark:bg-gray-700 bg-gray-300"
                        />
                        <input
                          type="number"
                          name="length"
                          placeholder="Length"
                          value={brief.length}
                          onChange={(e) =>
                            handleBriefChange(e, desc.id, brief.id)
                          }
                          className="border p-2 rounded dark:bg-gray-700 bg-gray-300"
                        />
                        <input
                          type="number"
                          name="width"
                          placeholder="Width"
                          value={brief.width}
                          onChange={(e) =>
                            handleBriefChange(e, desc.id, brief.id)
                          }
                          className="border p-2 rounded dark:bg-gray-700 bg-gray-300"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <input
                          type="number"
                          name="height"
                          placeholder="Height"
                          value={brief.height}
                          onChange={(e) =>
                            handleBriefChange(e, desc.id, brief.id)
                          }
                          className="border p-2 rounded dark:bg-gray-700 bg-gray-300"
                        />
                        <input
                          type="number"
                          name="number"
                          placeholder="Number"
                          value={brief.number}
                          onChange={(e) =>
                            handleBriefChange(e, desc.id, brief.id)
                          }
                          className="border p-2 rounded dark:bg-gray-700 bg-gray-300"
                        />
                        <input
                          type="number"
                          name="quantity"
                          placeholder="Quantity"
                          value={brief.quantity}
                          onChange={(e) =>
                            handleBriefChange(e, desc.id, brief.id)
                          }
                          className="border p-2 rounded dark:bg-gray-700 bg-gray-300"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-6 mt-4">
                    <button
                      onClick={() => addBrief(desc.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded">
                      Add Brief
                    </button>
                    <button
                      onClick={() => console.log("Saving...")}
                      className="bg-green-500 text-white px-3 py-1 rounded ml-auto">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-6 mt-4">
              <button
                onClick={() => addDescription(desc.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded">
                Add Description
              </button>

              <button
                onClick={() => console.log("Saving...")}
                className="bg-green-500 text-white px-3 py-1 rounded ml-auto">
                Save
              </button>
            </div>
          </div>
        ))}
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

export default StepThree;
