import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import Grades from "./pages/student/Grades";
import Attendance from "./pages/student/Attendance";

import Classes from "./pages/instructor/Classes";
import Students from "./pages/instructor/Students";
import Submissions from "./pages/instructor/Submissions";

import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        {/* Redirect */}
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

        <Route path="/grades" element={<Grades />} />

        <Route path="/attendance" element={<Attendance />}/>

        <Route path="/classes" element={<Classes />} />

        <Route path="/students" element={<Students />} />

        <Route path="/submissions" element={<Submissions />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;