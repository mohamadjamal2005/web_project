import React from "react";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({title,value,icon}: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300">

      <div>
        <p className="text-gray-500 mb-2">
          {title}
        </p>

        <h2 className="text-3xl font-bold text-gray-800">
          {value}
        </h2>
      </div>

      <div className="bg-blue-100 text-blue-700 p-4 rounded-2xl">
        {icon}
      </div>

    </div>
  );
};

export default StatCard;