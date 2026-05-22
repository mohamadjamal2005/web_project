import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GradeIcon from "@mui/icons-material/Grade";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import DashboardHero from "../../components/dashboard/DashboardHero";
import StatCard from "../../components/dashboard/StatCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ScheduleCard from "../../components/dashboard/ScheduleCard";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";

import { users } from "../../data/users";

const StudentDashboard = () => {
  return (
    <div className="space-y-8">

      <DashboardHero
        title={`Welcome Back, ${users[0].firstName}!`}
        subtitle1="Grade 10 • Academic Year 2025-2026"
        subtitle2="Track your academic progress, assignments, attendance, and daily schedule in one place."
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

      {/* Recent Grades */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Recent Grades
          </h2>

          <button className="text-blue-600 font-medium hover:underline">
            View All
          </button>

        </div>

        <div className="space-y-4">

          {/* Grade Item */}
          <div className="flex items-center justify-between border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">

            <div>

              <h3 className="font-semibold text-gray-800">
                Mathematics Quiz
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Algebra & Equations
              </p>

            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold">
              88%
            </div>

          </div>

          {/* Grade Item */}
          <div className="flex items-center justify-between border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">

            <div>

              <h3 className="font-semibold text-gray-800">
                Physics Exam
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Motion & Forces
              </p>

            </div>

            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-bold">
              92%
            </div>

          </div>

          {/* Grade Item */}
          <div className="flex items-center justify-between border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">

            <div>

              <h3 className="font-semibold text-gray-800">
                Chemistry Test
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Chemical Reactions
              </p>

            </div>

            <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-bold">
              84%
            </div>

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