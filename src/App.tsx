import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import StudentCourses from "./pages/student/StudentCourses";
import StudentAssignments from "./pages/student/StudentAssignments";
import StudentGrades from "./pages/student/StudentGrades";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentSchedule from "./pages/student/StudentSchedule";
import StudentExams from "./pages/student/StudentExams";
import StudentAnnouncements from "./pages/student/StudentAnnouncements";
import StudentMessages from "./pages/student/StudentMessages";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSettings from "./pages/student/StudentSettings";

import InstructorClasses from "./pages/instructor/InstructorClasses";
import InstructorStudents from "./pages/instructor/InstructorStudents";
import InstructorAttendance from "./pages/instructor/InstructorAttendance";
import InstructorAssignments from "./pages/instructor/InstructorAssignments";
import InstructorSubmissions from "./pages/instructor/InstructorSubmissions";
import InstructorGrades from "./pages/instructor/InstructorGrades";
import InstructorSchedule from "./pages/instructor/InstructorSchedule";
import InstructorAnnouncements from "./pages/instructor/InstructorAnnouncements";
import InstructorMessages from "./pages/instructor/InstructorMessages";
import InstructorProfile from "./pages/instructor/InstructorProfile";
import InstructorSettings from "./pages/instructor/InstructorSettings";

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
            
            <Route path="/student-courses" element={<StudentCourses />} />

            <Route path="/student-assignments" element={<StudentAssignments />}/>

            <Route path="/student-grades" element={<StudentGrades />} />
        
            <Route path="/student-attendance" element={<StudentAttendance />}/>
        
            <Route path="/student-schedule" element={<StudentSchedule />} />

            <Route path="/student-exams" element={<StudentExams />} />

            <Route path="/student-announcements" element={<StudentAnnouncements />}/>
        
            <Route path="/student-messages" element={<StudentMessages />} />

            <Route path="/student-profile" element={<StudentProfile />} />

            <Route path="/student-settings" element={<StudentSettings />} />

            <Route path="/instructor-classes" element={<InstructorClasses />} />

            <Route path="/instructor-students" element={<InstructorStudents />} />

            <Route path="/instructor-attendance" element={<InstructorAttendance />} />

            <Route path="/instructor-assignments" element={<InstructorAssignments />} />

            <Route path="/instructor-submissions" element={<InstructorSubmissions />} />

            <Route path="/instructor-grades" element={<InstructorGrades />} />

            <Route path="/instructor-schedule" element={<InstructorSchedule />} />

            <Route path="/instructor-announcements" element={<InstructorAnnouncements />} />

            <Route path="/instructor-messages" element={<InstructorMessages />} />

            <Route path="/instructor-profile" element={<InstructorProfile />} />

            <Route path="/instructor-settings" element={<InstructorSettings />} />
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
};

export default App;