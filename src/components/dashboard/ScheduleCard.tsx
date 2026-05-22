interface Props {
  subject: string;
  time: string;
  color: string;
}

const ScheduleCard = ({
  subject,
  time,
  color,
}: Props) => {
  return (
    <div
      className={`border-l-4 ${color} bg-white rounded-xl p-4 shadow-sm`}
    >

      <h3 className="font-semibold text-gray-800">
        {subject}
      </h3>

      <p className="text-gray-500 mt-1">
        {time}
      </p>

    </div>
  );
};

export default ScheduleCard;