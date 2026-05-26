const students = [
  {
    name: "Ahmad Jamal",
    grade: "88%",
  },

  {
    name: "Sarah Ali",
    grade: "91%",
  },

  {
    name: "John Smith",
    grade: "84%",
  },
];

const InstructorStudents = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Students
        </h1>

        <p className="text-gray-500 mt-2">
          View and monitor student performance.
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-5">
                Student
              </th>

              <th className="text-left p-5">
                Average Grade
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student, index) => (

              <tr
                key={index}
                className="border-t"
              >

                <td className="p-5">
                  {student.name}
                </td>

                <td className="p-5 font-bold text-blue-600">
                  {student.grade}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default InstructorStudents;