const InstructorAttendance = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Attendance
        </h1>

        <p className="text-gray-500 mt-2">
          Track student attendance records.
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Today's Attendance
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border p-4 rounded-xl">

            <span>Ahmad Jamal</span>

            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-xl">
              Present
            </span>

          </div>

          <div className="flex items-center justify-between border p-4 rounded-xl">

            <span>Sarah Ali</span>

            <span className="bg-red-100 text-red-700 px-4 py-1 rounded-xl">
              Absent
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default InstructorAttendance;