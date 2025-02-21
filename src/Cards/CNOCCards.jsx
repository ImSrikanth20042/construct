const CNOCCards = ({ cards }) => {
  return (
    <div className="flex items-center  justify-evenly flex-nowrap gap-6 ml-10 m-5 rounded p-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-4 dark:bg-gray-600 bg-white rounded-2xl shadow-lg flex items-center justify-between w-65">
          <div className="flex justify-between w-full">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
              {card.title}
            </h3>
            <p className={`text-3xl font-bold ${card.color} mt-0.5`}>
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CNOCCards;
