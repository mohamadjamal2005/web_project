import StudentDashboard from "../student/StudentDashboard";
import InstructorDashboard from "../instructor/InstructorDashboard";
import AdminDashboard from "../admin/AdminDashboard";

import { getUser } from "../../utils/auth";

const Dashboard = () => {
  const user = getUser();

  switch (user?.role) {
    case "student":
      return <StudentDashboard />;

    case "instructor":
      return <InstructorDashboard />;

    case "admin":
      return <AdminDashboard />;

    default:
      return <div>Unauthorized</div>;
  }
};

export default Dashboard;