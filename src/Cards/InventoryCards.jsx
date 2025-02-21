const InventoryCards = ({ cards }) => {
  return (
    <div
      className={`flex grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 
  gap-6 ml-10 m-5 rounded mt-10 justify-items-center`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64 dark:bg-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              {card.title}
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2 dark:text-gray-300">
              {card.value}
            </p>
          </div>
          <card.icon
            sx={{ color: card.iconColor, fontSize: 35 }}
            className={`${card.iconBgColor} p-0.5 rounded-sm`}
          />
        </div>
      ))}
    </div>
  );
};

export default InventoryCards;
