import { Close } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const works = [
  "Excavation (manual)",
  "Excavation (machine)",
  "Backfilling with soil",
  "Earth compaction",
  "Grading",
  "Leveling",
  "Site clearing",
  "Plain Cement Concrete (PCC)",
  "Reinforced Cement Concrete (RCC)",
  "Shuttering/Formwork",
  "Steel Reinforcement (TMT Bars)",
  "Footings",
  "Pile foundations",
  "Retaining walls",
  "Slabs",
  "Clay Brick Masonry (9 wall)",
  "Fly Ash Brick Masonry",
  "AAC Block Masonry",
  "Internal Cement Plaster (12mm)",
  "External Plaster (20mm)",
  "POP/Putty Finishing",
  "Vitrified Tiles Flooring (600x600mm)",
  "Ceramic Wall Tiles (300x450mm)",
  "Marble/Granite Flooring",
  "RCC Roof Slab (M20 grade)",
  "Bituminous Waterproofing",
  "Polyurethane (PU) Coating",
  "Treatments",
  "Interior Emulsion Paint (Asian/Berger)",
  "Exterior Weatherproof Paint",
  "Enamel Paint (Doors, Windows, Metal)",
  "Mild Steel Structural Fabrication",
  "Stainless Steel Fabrication",
  "Industrial sheds",
  "Trusses",
  "Bituminous (Asphalt) Road",
  "Concrete Road (RCC M30 grade)",
  "Paver Block Roads",
  "Additional Works",
  "Scaffolding Rental",
  "Labour Charges (Mason, Carpenter, Painter)",
  "Borewell Drilling (150mm - 250mm dia)",
  "Fireworks",
  "Heating",
  "Gardening",
  "Glazing",
];
const units = {
  length: ["Meter (m)", "Yard (yd)"],
  area: ["Square Meter (sqm)", "Square Foot (sqft)", "Square Yard (sqyd)"],
  volume: ["Cubic Meter (cum)"],
  weight: ["Kilogram (kg)", "Metric Ton (MT)"],
  runningLength: ["Running Meter (rsm)"],
};

const AddProject = ({ setIsModalOpen }) => {
  const [items, setItems] = useState([{ id: 1, work: "", unit: "", rate: "" }]);
  useEffect(() => {
    loadDraft();
  }, []);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, work: "", unit: "", rate: "" },
    ]);
  };
  const handleWorkChange = (e, index) => {
    const { value } = e.target;
    setItems(
      items.map((item, i) => (i === index ? { ...item, work: value } : item)),
    );
  };
  const handleUnitChange = (e, index) => {
    const { value } = e.target;
    setItems(
      items.map((item, i) => (i === index ? { ...item, unit: value } : item)),
    );
  };

  const handleRateChange = (e, index) => {
    const { value } = e.target;
    setItems(
      items.map((item, i) => (i === index ? { ...item, rate: value } : item)),
    );
  };
  const saveDraft = () => {
    const draftData = {
      client: document.getElementById("client").value,
      city: document.querySelector('input[placeholder="City"]').value,
      projectName: document.querySelector('input[placeholder="Project Name"]')
        .value,
      startDate: document.querySelector('input[placeholder="Date of Start"]')
        .value,
      withMaterial: document.getElementById("material").value,
      items: items,
    };

    localStorage.setItem("draftData", JSON.stringify(draftData));

    alert("Draft saved successfully!");
  };

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
  const loadDraft = () => {
    const draftData = localStorage.getItem("draftData");

    if (draftData) {
      const parsedData = JSON.parse(draftData);

      document.getElementById("client").value = parsedData.client;
      document.querySelector('input[placeholder="City"]').value =
        parsedData.city;
      document.querySelector('input[placeholder="Project Name"]').value =
        parsedData.projectName;
      document.querySelector('input[placeholder="Date of Start"]').value =
        parsedData.startDate;
      document.getElementById("material").value = parsedData.withMaterial;
      setItems(parsedData.items);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-50 z-50">
      <div className="relative p-6 w-full max-w-3xl bg-white rounded-lg shadow-lg dark:bg-gray-700 max-h-[90vh] overflow-y-auto md:w-1/2 xl:w-1/3">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 bg-gray-200 hover:bg-gray-300 hover:text-gray-900 rounded-full text-lg p-2"
          onClick={() => setIsModalOpen(false)}>
          <Close />
        </button>

        {/* Modal Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add Project
          </h3>
        </div>

        {/* Modal Content */}
        <div className="flex flex-wrap justify-center m-3">
          <form className="max-w-sm mx-auto w-full md:w-1/2 xl:w-1/3">
            <select
              id="client"
              className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue>All Clients</option>
              <option value="A">Client A</option>
              <option value="B">Client B</option>
              <option value="C">Client C</option>
            </select>
          </form>

          <Link
            to="/c-client"
            className="bg-blue-600 text-white px-4 py-2 rounded mb-4 ml-auto">
            Add Client
          </Link>
        </div>

        <div className="p-6 bg-white dark:bg-gray-600">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-1 lg:grid-cols-2">
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300"
            />
            <input
              type="text"
              placeholder="Project Name"
              className="border p-2 rounded w-full dark:text-gray-200 dark:bg-gray-600 text-gray-900 bg-gray-300"
            />
            <input
              type="date"
              placeholder="Date of Start"
              className="border p-2 rounded w-full dark:text-gray-100 dark:bg-gray-600 text-gray-900 bg-gray-300"
            />
            <select
              id="material"
              className="dark:text-gray-100 dark:bg-gray-600 text-gray-900 bg-gray-300"
              onChange={(e) => {
                if (e.target.value === "none") {
                  setItems([]);
                } else {
                  setItems([{ id: 1, work: "", unit: "", rate: "" }]);
                }
              }}>
              <option defaultValue>With Material</option>
              <option value="none">Without Material</option>
            </select>
          </div>

          {/* Add Items Button */}
          {document.getElementById("material")?.value !== "none" && (
            <>
              {/* Add Items Button */}
              <button
                onClick={addItem}
                className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
                Add Items
              </button>
              {/* Items List */}
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 mb-2 md:grid-cols-1 lg:grid-cols-3">
                  <select
                    value={item.work}
                    onChange={(e) => handleWorkChange(e, index)}
                    className="border p-2 rounded w-full text-gray-700">
                    <option value="">Select Work</option>
                    {works.map((work, index) => (
                      <option key={index} value={work}>
                        {work}
                      </option>
                    ))}
                  </select>
                  <select
                    value={item.unit}
                    onChange={(e) => handleUnitChange(e, index)}
                    className="border p-2 rounded w-full text-gray-700">
                    <option value="">Select Unit</option>
                    {getUnits(item.work).map((unit, index) => (
                      <option key={index} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => handleRateChange(e, index)}
                    placeholder="Rate"
                    className="border p-2 rounded w-full"
                  />
                </div>
              ))}
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button onClick={saveDraft} className="border px-4 py-2 rounded">
              Save Draft
            </button>

            <Link
              className="bg-blue-600 text-white px-4 py-2 rounded"
              to="/new-bill">
              Generate Bill
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
