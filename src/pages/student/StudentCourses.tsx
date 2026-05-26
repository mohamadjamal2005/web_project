import SchoolIcon from "@mui/icons-material/School";

const courses = [
  {
    name: "Mathematics",
    instructor: "John Doe",
    progress: 78,
  },

  {
    name: "Physics",
    instructor: "Sarah Johnson",
    progress: 91,
  },

  {
    name: "Chemistry",
    instructor: "Michael Brown",
    progress: 65,
  },
];

const StudentCourses = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Courses
        </h1>

        <p className="text-gray-500 mt-2">
          View your enrolled courses and progress.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {courses.map((course, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm p-6"
          >

            <div className="flex items-center justify-between mb-5">

              <div className="bg-blue-100 text-blue-700 p-4 rounded-2xl">
                <SchoolIcon />
              </div>

              <span className="text-sm text-gray-500">
                {course.progress}%
              </span>

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              {course.name}
            </h2>

            <p className="text-gray-500 mt-2">
              Instructor: {course.instructor}
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-6">

              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${course.progress}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StudentCourses;