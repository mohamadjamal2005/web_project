import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Jan",
    value: 75,
  },

  {
    month: "Feb",
    value: 82,
  },

  {
    month: "Mar",
    value: 88,
  },

  {
    month: "Apr",
    value: 91,
  },

  {
    month: "May",
    value: 86,
  },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Performance Analytics
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default AnalyticsChart;