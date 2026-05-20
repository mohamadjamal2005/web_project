import { getUser } from "../../utils/auth";

import StudentDashboard from "./StudentDashboard";
import InstructorDashboard from "./InstructorDashboard";
import AdminDashboard from "./AdminDashboard";

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