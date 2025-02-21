const BillingCards = ({ cards }) => {
  return (
    <div
      className={`flex grid-cols-1 sm:grid-cols-2 md:grid-cols-2  
  gap-6 ml-10 m-5 rounded mt-10 justify-items-center`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-between w-full max-w-xs">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {card.title}
            </h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-300 mt-1">
              {card.value}
            </p>
          </div>
          <card.icon
            sx={{ color: card.iconColor, fontSize: 35 }}
            className={`${card.iconBgColor} p-2 rounded-md shadow-md`}
          />
        </div>
      ))}
    </div>
  );
};

export default BillingCards;
