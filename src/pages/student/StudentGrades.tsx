const grades = [
  {
    subject: "Mathematics",
    exam: "Quiz",
    grade: "88%",
  },

  {
    subject: "Physics",
    exam: "Midterm",
    grade: "92%",
  },

  {
    subject: "Chemistry",
    exam: "Final",
    grade: "84%",
  },
];

const StudentGrades = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Grades
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor your academic performance.
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-5">
                Subject
              </th>

              <th className="text-left p-5">
                Exam
              </th>

              <th className="text-left p-5">
                Grade
              </th>

            </tr>

          </thead>

          <tbody>

            {grades.map((item, index) => (

              <tr
                key={index}
                className="border-t"
              >

                <td className="p-5">
                  {item.subject}
                </td>

                <td className="p-5">
                  {item.exam}
                </td>

                <td className="p-5 font-bold text-blue-600">
                  {item.grade}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default StudentGrades;