import {
  ResponsiveContainer,
  AreaChart,
  Area,
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
    <div className="bg-white rounded-3xl shadow-sm p-6 h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            Performance Analytics
          </h2>

          <p className="text-gray-500 mt-1">
            Monthly academic performance overview
          </p>

        </div>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold">
          +12%
        </div>

      </div>

      {/* Chart */}
      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

            {/* Gradient */}
            <defs>

              <linearGradient
                id="colorValue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e5e7eb"
            />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              tick={{
                fill: "#6b7280",
                fontSize: 14,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{
                fill: "#6b7280",
                fontSize: 14,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorValue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default AnalyticsChart;