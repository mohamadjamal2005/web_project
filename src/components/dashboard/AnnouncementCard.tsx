interface Props {
  title: string;
  date: string;
}

const AnnouncementCard = ({title,date}: Props) => {
  return (
    <div className="border-b border-gray-100 py-4">

      <h3 className="font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {date}
      </p>

    </div>
  );
};

export default AnnouncementCard;