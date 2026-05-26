import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import GradeIcon from "@mui/icons-material/Grade";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QuizIcon from "@mui/icons-material/Quiz";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";

import type { SidebarItem } from "../types/sidebar.types";

export const studentSidebar: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Courses",
    path: "/student-courses",
    icon: <SchoolIcon />,
  },

  {
    label: "Assignments",
    path: "/student-assignments",
    icon: <AssignmentIcon />,
  },

  {
    label: "Grades",
    path: "/student-grades",
    icon: <GradeIcon />,
  },

  {
    label: "Attendance",
    path: "/student-attendance",
    icon: <CheckCircleIcon />,
  },

  {
    label: "Schedule",
    path: "/student-schedule",
    icon: <CalendarMonthIcon />,
  },

  {
    label: "Exams",
    path: "/student-exams",
    icon: <QuizIcon />,
  },

  {
    label: "Announcements",
    path: "/student-announcements",
    icon: <CampaignIcon />,
  },

  {
    label: "Messages",
    path: "/student-messages",
    icon: <ChatIcon />,
  },

  {
    label: "Profile",
    path: "/student-profile",
    icon: <PersonIcon />,
  },

  {
    label: "Settings",
    path: "/student-settings",
    icon: <SettingsIcon />,
  }
];

export const instructorSidebar: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Classes",
    path: "/instructor-classes",
    icon: <SchoolIcon />,
  },

  {
    label: "Students",
    path: "/instructor-students",
    icon: <PeopleIcon />,
  },
  {
    label: "Assignments",
    path: "/instructor-assignments",
    icon: <AssignmentIcon />,
  },

  {
    label: "Grades",
    path: "/instructor-grades",
    icon: <GradeIcon />,
  },

  {
    label: "Attendance",
    path: "/instructor-attendance",
    icon: <CheckCircleIcon />,
  },

  {
    label: "Schedule",
    path: "/instructor-schedule",
    icon: <CalendarMonthIcon />,
  },

  {
    label: "Announcements",
    path: "/instructor-announcements",
    icon: <CampaignIcon />,
  },

  {
    label: "Messages",
    path: "/instructor-messages",
    icon: <ChatIcon />,
  },

  {
    label: "Profile",
    path: "/instructor-profile",
    icon: <PersonIcon />,
  },

  {
    label: "Submissions",
    path: "/instructor-submissions",
    icon: <AssignmentIcon />,
  },

  {
    label: "Settings",
    path: "/instructor-settings",
    icon: <SettingsIcon />,
  },
];

export const adminSidebar: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Users",
    path: "/users",
    icon: <PeopleIcon />,
  },

  {
    label: "Classes",
    path: "/classes",
    icon: <SchoolIcon />,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];