import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import StatCard from "../../components/dashboard/StatCard";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          School management overview
        </p>
      </div>

      {/* Stats */}
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

      {/* Announcements */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">
          System Announcements
        </h2>

        <AnnouncementCard
          title="New semester starts next month"
          date="Today"
        />

        <AnnouncementCard
          title="Teachers meeting scheduled"
          date="Yesterday"
        />

      </div>

      {/* Quick Actions */}
      <div>

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <QuickActionCard
            title="Manage Users"
            icon={<PeopleIcon />}
          />

          <QuickActionCard
            title="Manage Classes"
            icon={<SchoolIcon />}
          />

          <QuickActionCard
            title="Analytics"
            icon={<AnalyticsIcon />}
          />

          <QuickActionCard
            title="Reports"
            icon={<GroupsIcon />}
          />

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;