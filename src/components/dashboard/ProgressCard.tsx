interface Props {
  title: string;
  value: number;
  color: string;
}

const ProgressCard = ({
  title,
  value,
  color,
}: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex items-center justify-between mb-4">

        <h3 className="font-semibold text-gray-700">
          {title}
        </h3>

        <span className="font-bold text-gray-800">
          {value}%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
};

export default ProgressCard;