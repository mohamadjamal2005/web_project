import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GradeIcon from "@mui/icons-material/Grade";

import StatCard from "../../components/dashboard/StatCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";

const StudentDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Student Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to MJX School
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Courses"
          value="6"
          icon={<SchoolIcon fontSize="large" />}
        />

        <StatCard
          title="Assignments"
          value="14"
          icon={<AssignmentIcon fontSize="large" />}
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon={<EventAvailableIcon fontSize="large" />}
        />

        <StatCard
          title="Average Grade"
          value="88%"
          icon={<GradeIcon fontSize="large" />}
        />

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Announcements */}
        <div className="bg-white rounded-2xl shadow-sm p-6 xl:col-span-2">

          <h2 className="text-2xl font-bold mb-6">
            Announcements
          </h2>

          <AnnouncementCard
            title="Math exam next Monday"
            date="Today"
          />

          <AnnouncementCard
            title="Science fair registration opened"
            date="Yesterday"
          />

        </div>

        {/* Schedule */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Today's Classes
          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-semibold">
                Mathematics
              </p>

              <p className="text-sm text-gray-500">
                8:00 AM - 9:30 AM
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <p className="font-semibold">
                Physics
              </p>

              <p className="text-sm text-gray-500">
                10:00 AM - 11:30 AM
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div>

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <QuickActionCard
            title="Assignments"
            icon={<AssignmentIcon />}
          />

          <QuickActionCard
            title="Courses"
            icon={<SchoolIcon />}
          />

          <QuickActionCard
            title="Attendance"
            icon={<EventAvailableIcon />}
          />

          <QuickActionCard
            title="Grades"
            icon={<GradeIcon />}
          />

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;