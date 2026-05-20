import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const QuickActionCard = ({title,icon}: Props) => {
  return (
    <button className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center gap-4 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">

      <div className="bg-blue-100 text-blue-700 p-4 rounded-2xl">
        {icon}
      </div>

      <p className="font-semibold text-gray-700">
        {title}
      </p>

    </button>
  );
};

export default QuickActionCard;