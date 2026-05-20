import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import StatCard from "../../components/dashboard/StatCard";
import ActivityCard from "../../components/dashboard/ActivityCard";

const InstructorDashboard = () => {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Instructor Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your classes and students
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Classes"
          value="8"
          icon={<MenuBookIcon fontSize="large" />}
        />

        <StatCard
          title="Students"
          value="240"
          icon={<GroupsIcon fontSize="large" />}
        />

        <StatCard
          title="Assignments"
          value="32"
          icon={<AssignmentTurnedInIcon fontSize="large" />}
        />

        <StatCard
          title="Attendance"
          value="96%"
          icon={<EventAvailableIcon fontSize="large" />}
        />

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <ActivityCard
          activity="You uploaded a new assignment"
          time="1 hour ago"
        />

        <ActivityCard
          activity="Attendance updated for Grade 10"
          time="Today"
        />

        <ActivityCard
          activity="New submission received"
          time="Yesterday"
        />

      </div>

    </div>
  );
};

export default InstructorDashboard;