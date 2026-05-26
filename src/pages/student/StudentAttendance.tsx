const StudentAttendance = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Attendance
        </h1>

        <p className="text-gray-500 mt-2">
          Track your attendance records.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-gray-500">
            Attendance Rate
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-4">
            92%
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-gray-500">
            Absences
          </h2>

          <p className="text-4xl font-bold text-red-500 mt-4">
            3
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-gray-500">
            Late Arrivals
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-4">
            1
          </p>

        </div>

      </div>

    </div>
  );
};

export default StudentAttendance;