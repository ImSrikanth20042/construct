import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export default function BillChart({ billChart }) {
  return (
    <div className="flex justify-center items-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <BarChart width={1080} height={300} data={billChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
        <YAxis tick={{ fill: "#4B5563" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#6366F1" radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
}
