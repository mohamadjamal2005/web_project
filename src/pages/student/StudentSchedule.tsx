const schedule = [
  {
    subject: "Mathematics",
    time: "08:00 AM",
  },

  {
    subject: "Physics",
    time: "10:00 AM",
  },

  {
    subject: "Chemistry",
    time: "01:00 PM",
  },
];

const StudentSchedule = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Schedule
        </h1>

        <p className="text-gray-500 mt-2">
          View your daily class schedule.
        </p>

      </div>

      <div className="space-y-4">

        {schedule.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between"
          >

            <h2 className="text-xl font-bold text-gray-800">
              {item.subject}
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StudentSchedule;