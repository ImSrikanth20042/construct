const ALAMCards = ({ cards }) => {
  return (
    <div
      className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-2  
  gap-6 ml-10 m-5 rounded mt-10 justify-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4  dark:bg-gray-600 bg-white hover:bg-gray-500 rounded-2xl shadow-lg flex items-center justify-between w-80`}>
          <div className="flex flex-col justify-between w-full">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              {card.title}
            </h4>
            <p className="text-sm  mt-1 dark:text-gray-300 text-gray-800">
              {card.description}
            </p>
          </div>
          <card.icon
            sx={{ color: card.iconColor, fontSize: 35 }}
            className={`${card.iconBgColor}  p-1  rounded-sm ml-auto `}
          />
        </div>
      ))}
    </div>
  );
};

export default ALAMCards;
