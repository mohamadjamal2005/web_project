const schedule = [
  {
    class: "Grade 10-A",
    time: "08:00 AM",
  },

  {
    class: "Grade 11-B",
    time: "10:00 AM",
  },
];

const InstructorSchedule = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Schedule
        </h1>

        <p className="text-gray-500 mt-2">
          View your teaching schedule.
        </p>

      </div>

      <div className="space-y-4">

        {schedule.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between"
          >

            <h2 className="text-xl font-bold text-gray-800">
              {item.class}
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

export default InstructorSchedule;