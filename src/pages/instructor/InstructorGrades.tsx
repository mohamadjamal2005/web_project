const InstructorGrades = () => {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-gray-800">
            Grades
          </h1>

          <p className="text-gray-500 mt-2">
            Manage student grades and performance.
          </p>

        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition">
          Add Grade
        </button>

      </div>

    </div>
  );
};

export default InstructorGrades;