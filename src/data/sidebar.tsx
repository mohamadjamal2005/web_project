import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

import type { SidebarItem } from "../types/sidebar.types";

export const studentSidebar: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Courses",
    path: "/courses",
    icon: <SchoolIcon />,
  },

  {
    label: "Assignments",
    path: "/assignments",
    icon: <AssignmentIcon />,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

export const instructorSidebar: SidebarItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Classes",
    path: "/classes",
    icon: <SchoolIcon />,
  },

  {
    label: "Students",
    path: "/students",
    icon: <PeopleIcon />,
  },

  {
    label: "Settings",
    path: "/settings",
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