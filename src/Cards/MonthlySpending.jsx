import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const MonthlySpending = ({ monthlySpending }) => {
  return (
    <div className="w-full p-5 bg-white dark:bg-gray-800 rounded-lg shadow dark:text-gray-300 ">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Monthly Spending
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlySpending}>
          <XAxis dataKey="name" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#2563eb"
            fillOpacity={0.8}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySpending;
