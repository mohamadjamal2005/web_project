const submissions = [
  {
    student: "Ahmad Jamal",
    assignment: "Math Homework",
    status: "Submitted",
  },

  {
    student: "Sarah Ali",
    assignment: "Physics Report",
    status: "Pending",
  },
];

const InstructorSubmissions = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Submissions
        </h1>

        <p className="text-gray-500 mt-2">
          Review student submissions.
        </p>

      </div>

      <div className="space-y-4">

        {submissions.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between"
          >

            <div>

              <h2 className="text-xl font-bold text-gray-800">
                {item.assignment}
              </h2>

              <p className="text-gray-500 mt-1">
                {item.student}
              </p>

            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl">
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default InstructorSubmissions;