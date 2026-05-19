import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/auth/Login";

import StudentDashboard from "./pages/student/StudentDashboard";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

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

            {/* Student */}
            <Route
              path="/student/dashboard"
              element={<StudentDashboard />}
            />

            {/* Instructor */}
            <Route
              path="/instructor/dashboard"
              element={<InstructorDashboard />}
            />

            {/* Admin */}
            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

          </Route>
        </Route>

        {/* Redirect */}
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;