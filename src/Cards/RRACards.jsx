const RRACards = ({ cards }) => {
  return (
    <div className="flex items-center justify-evenly flex-nowrap gap-6 ml-10 m-5 rounded p-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 ${card.hover} dark:bg-gray-600 bg-white hover:bg-gray-500 rounded-2xl shadow-lg  items-center justify-between w-80`}>
          <div className="flex">
            <div className="flex w-full p-5">
              <card.icon
                sx={{ color: card.iconColor, fontSize: 35 }}
                className={`${card.iconBgColor}  p-1  rounded-full   `}
              />
              <a href="#" className="text-blue-600 ml-auto">
                Generate
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full p-2.5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {card.text}
            </h3>
            <p className="text-sm font-bold  mt-1 dark:text-gray-300 text-gray-800">
              {card.description}
            </p>
          </div>{" "}
          <p className="font-light text-gray-900 dark:text-gray-200 p-2.5 mt-3">Last generated: {card.time}</p>
        </div>
      ))}
    </div>
  );
};

export default RRACards;
