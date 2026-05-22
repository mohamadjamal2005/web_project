import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TaskIcon from "@mui/icons-material/Task";

import DashboardHero from "../../components/dashboard/DashboardHero";
import StatCard from "../../components/dashboard/StatCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ScheduleCard from "../../components/dashboard/ScheduleCard";
import ActivityCard from "../../components/dashboard/ActivityCard";

const InstructorDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <DashboardHero
        title="Instructor Dashboard"
        subtitle="Manage classes, monitor student performance, review submissions, and organize course activities efficiently."
      />

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
          title="Pending Reviews"
          value="12"
          icon={<TaskIcon fontSize="large" />}
        />

      </div>

      {/* Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ProgressCard
          title="Attendance Rate"
          value={96}
          color="bg-green-500"
        />

        <ProgressCard
          title="Assignment Completion"
          value={84}
          color="bg-blue-600"
        />

      </div>

      {/* Chart + Classes */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Chart */}
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        {/* Today's Classes */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Today's Classes
          </h2>

          <div className="space-y-4">

            <ScheduleCard
              subject="Grade 10-A"
              time="08:00 AM - 09:30 AM"
              color="border-blue-600"
            />

            <ScheduleCard
              subject="Grade 11-B"
              time="10:00 AM - 11:30 AM"
              color="border-green-600"
            />

            <ScheduleCard
              subject="Grade 12-C"
              time="01:00 PM - 02:00 PM"
              color="border-purple-600"
            />

          </div>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <button className="text-blue-600 font-medium hover:underline">
            View All
          </button>

        </div>

        <ActivityCard
          activity="New assignment uploaded for Grade 10"
          time="10 minutes ago"
        />

        <ActivityCard
          activity="Attendance updated for Grade 11"
          time="1 hour ago"
        />

        <ActivityCard
          activity="New student submission received"
          time="Yesterday"
        />

      </div>

    </div>
  );
};

export default InstructorDashboard;