const BRCards = ({ cards }) => {
  return (
    <div className="flex flex-nowrap gap-4 justify-center p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-5 bg-white rounded-2xl shadow-md flex items-center justify-between w-[280px] md:w-[320px] lg:w-[350px] dark:bg-gray-800">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {card.title}
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-2 dark:text-gray-300">
              {card.value}
            </p>
            <p className="text-sm text-gray-600 mt-1 font-medium dark:text-gray-400">
              <span className={`font-bold ${card.changeColor}`}>
                {card.percentageChange}
              </span>{" "}
              from last month
            </p>
          </div>
          <card.icon
            sx={{ color: card.iconColor, fontSize: 35 }}
            className={`${card.iconBgColor} p-1 rounded-md`}
          />
        </div>
      ))}
    </div>
  );
};

export default BRCards;
