import { users } from "../../data/users";

const StudentProfile = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700">
          Profile
        </div>

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            {users[0].firstName} {users[0].lastName}
          </h1>

          <p className="text-gray-500 mt-2">
            Grade 10 Student
          </p>

        </div>

      </div>

    </div>
  );
};

export default StudentProfile;