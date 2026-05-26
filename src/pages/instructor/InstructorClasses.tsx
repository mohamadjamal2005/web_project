const classes = [
  {
    name: "Grade 10-A",
    students: 32,
    room: "Room 201",
  },

  {
    name: "Grade 11-B",
    students: 28,
    room: "Room 305",
  },

  {
    name: "Grade 12-C",
    students: 25,
    room: "Room 102",
  }
];

const InstructorClasses = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Classes
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your assigned classes.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {classes.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm p-6"
          >

            <h2 className="text-2xl font-bold text-gray-800">
              {item.name}
            </h2>

            <p className="text-gray-500 mt-4">
              Students: {item.students}
            </p>

            <p className="text-gray-500 mt-2">
              {item.room}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default InstructorClasses;