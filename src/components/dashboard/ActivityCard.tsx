interface Props {
  activity: string;
  time: string;
}

const ActivityCard = ({activity,time}: Props) => {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-100">

      <div className="w-3 h-3 rounded-full bg-blue-600 mt-2" />

      <div>
        <p className="text-gray-800 font-medium">
          {activity}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {time}
        </p>
      </div>

    </div>
  );
};

export default ActivityCard;