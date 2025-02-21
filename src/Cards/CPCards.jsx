const CPCards = ({ cards }) => {
  return (
    <div className="flex items-center justify-evenly flex-nowrap gap-6 ml-10 m-5 rounded p-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 ${card.hover} dark:bg-gray-600 bg-white hover:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-between w-80`}>
          <card.icon
            sx={{ color: card.iconColor, fontSize: 35 }}
            className={`${card.iconBgColor}  p-1  rounded-sm ml-auto mr-5`}
          />
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {card.title}
            </h3>
            <p className="text-2xl font-bold  mt-1 dark:text-gray-300 text-gray-800">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CPCards;
