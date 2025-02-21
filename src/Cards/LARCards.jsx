const LARCards = ({ report }) => {
  return (
    <div className="flex items-center justify-evenly flex-nowrap gap-6 ml-10 m-5 rounded p-5">
      {report.map((card, index) => (
        <div
          key={index}
          className={`p-4  dark:bg-gray-600 bg-white hover:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-between w-80`}>
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-lg font-bold text-gray-600 dark:text-gray-800">
              {card.title}
            </h3>
            <h2 className={`${card.percentBg} text-2xl font-bold`}>
              {card.percentile}
            </h2>
            <p className="text-sm  mt-1 dark:text-gray-300 text-gray-800">
              {card.description} from last period
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LARCards;
