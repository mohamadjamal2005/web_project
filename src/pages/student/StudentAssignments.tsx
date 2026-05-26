const assignments = [
  {
    subject: "Mathematics",
    title: "Algebra Homework",
    due: "Tomorrow",
    status: "Pending",
  },

  {
    subject: "Physics",
    title: "Motion Report",
    due: "May 28",
    status: "Submitted",
  },
];

const StudentAssignments = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Assignments
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and track your assignments.
        </p>

      </div>

      <div className="space-y-4">

        {assignments.map((assignment, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between"
          >

            <div>

              <h2 className="text-xl font-bold text-gray-800">
                {assignment.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {assignment.subject}
              </p>

            </div>

            <div className="text-right">

              <p className="text-gray-500">
                Due: {assignment.due}
              </p>

              <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-xl text-sm font-medium">
                {assignment.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StudentAssignments;