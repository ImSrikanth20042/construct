const GeneralSettings = () => {
  return (
    <div className="flex flex-col items-start w-full h-auto max-w-4xl p-10 bg-white border border-gray-300 rounded-xl shadow-lg dark:bg-gray-900 dark:border-gray-700">
      <h2 className="mb-6 text-blue-400 font-semibold text-2xl">
        General Settings
      </h2>

      {/* Language and Time Zone Selection */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-8">
        {/* Language Selection */}
        <form className="w-full md:w-1/2">
          <label
            htmlFor="lang"
            className="block mb-3 text-lg font-medium text-gray-900 dark:text-white">
            System Language
          </label>
          <select
            id="lang"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </form>

        {/* Time Zone Selection */}
        <form className="w-full md:w-1/2">
          <label
            htmlFor="time-zone"
            className="block mb-3 text-lg font-medium text-gray-900 dark:text-white">
            Time Zone
          </label>
          <select
            id="time-zone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>UTC (GMT+00:00)</option>
            <option value="est">EST (GMT-05:00)</option>
            <option value="pst">PST (GMT-08:00)</option>
          </select>
        </form>
      </div>
      {/* Theme Preferences */}
      <div className="flex m-5 p-2 flex-col">
        <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Theme Preference
        </h4>
        <div className="flex">
          <div className="flex items-center me-4">
            <input
              id="dark-mode"
              type="radio"
              value="dark"
              name="theme"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="dark-mode"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark Mode
            </label>
          </div>

          <div className="flex items-center me-4">
            <input
              id="light-mode"
              type="radio"
              value="light"
              name="theme"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="light-mode"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Light Mode
            </label>
          </div>

          <div className="flex items-center me-4">
            <input
              id="system-default"
              type="radio"
              value="default"
              name="theme"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="system-default"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              System Default
            </label>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="mt-8 w-full">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Notification Preferences
        </h3>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="w-5 h-5 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            Email Notifications
          </label>
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="w-5 h-5 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            SMS Alerts
          </label>
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="w-5 h-5 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            Push Notifications
          </label>
        </div>
      </div>

      {/* Account Security Section */}
      <div className="mt-8 w-full">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Data Privacy
        </h3>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="w-5 h-5 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            Allow Usage Analytics
          </label>
          <label className="flex items-center text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              className="w-5 h-5 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            Share Error Reports
          </label>
        </div>
      </div>
      <button
        type="button"
        className="text-white ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Default
      </button>
    </div>
  );
};

export default GeneralSettings;
