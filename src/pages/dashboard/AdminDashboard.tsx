import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import DashboardHero from "../../components/dashboard/DashboardHero";
import StatCard from "../../components/dashboard/StatCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ActivityCard from "../../components/dashboard/ActivityCard";

import { users } from "../../data/users";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <DashboardHero
        title={`Welcome Back, ${users[2].firstName}!`}
        subtitle1="Academic Year 2025 - 2026"
        subtitle2="Monitor school operations, manage users, analyze performance, and oversee the entire academic system."
      />

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Students"
          value="1,240"
          icon={<GroupsIcon fontSize="large" />}
        />

        <StatCard
          title="Teachers"
          value="85"
          icon={<PeopleIcon fontSize="large" />}
        />

        <StatCard
          title="Classes"
          value="48"
          icon={<SchoolIcon fontSize="large" />}
        />

        <StatCard
          title="Reports"
          value="126"
          icon={<AnalyticsIcon fontSize="large" />}
        />

      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ProgressCard
          title="System Performance"
          value={98}
          color="bg-green-500"
        />

        <ProgressCard
          title="Academic Completion"
          value={87}
          color="bg-blue-600"
        />

      </div>

      {/* Chart + System Status */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Chart */}
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        {/* System Status */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-6">
            System Status
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between">

              <span className="text-gray-600">
                Server Status
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Online
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-gray-600">
                Academic Year
              </span>

              <span className="font-semibold text-gray-800">
                2025 - 2026
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-gray-600">
                Active Users
              </span>

              <span className="font-semibold text-gray-800">
                1,331
              </span>

            </div>

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
          activity="New instructor account created"
          time="20 minutes ago"
        />

        <ActivityCard
          activity="Grade 11 schedule updated"
          time="Today"
        />

        <ActivityCard
          activity="System report generated"
          time="Yesterday"
        />

      </div>

    </div>
  );
};

export default AdminDashboard;