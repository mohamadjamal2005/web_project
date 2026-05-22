import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GradeIcon from "@mui/icons-material/Grade";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import DashboardHero from "../../components/dashboard/DashboardHero";
import StatCard from "../../components/dashboard/StatCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ScheduleCard from "../../components/dashboard/ScheduleCard";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";

const StudentDashboard = () => {
  return (
    <div className="space-y-8">

      <DashboardHero
        title="Student Dashboard"
        subtitle="Track your academic progress, assignments, attendance, and daily schedule in one place."
      />

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

      {/* Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ProgressCard
          title="Attendance Progress"
          value={92}
          color="bg-green-500"
        />

        <ProgressCard
          title="Academic Performance"
          value={88}
          color="bg-blue-600"
        />

      </div>

      {/* Chart + Schedule */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            Today's Schedule
          </h2>

          <div className="space-y-4">

            <ScheduleCard
              subject="Mathematics"
              time="08:00 AM - 09:30 AM"
              color="border-blue-600"
            />

            <ScheduleCard
              subject="Physics"
              time="10:00 AM - 11:30 AM"
              color="border-green-600"
            />

            <ScheduleCard
              subject="Chemistry"
              time="01:00 PM - 02:00 PM"
              color="border-purple-600"
            />

          </div>

        </div>

      </div>

      {/* Announcements */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

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

    </div>
  );
};

export default StudentDashboard;