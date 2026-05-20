import mjx_school from "../../assets/mjx_school.png";

import {
  studentSidebar,
  instructorSidebar,
  adminSidebar,
} from "../../data/sidebar";

import { getUser } from "../../utils/auth";

import MenuItem from "./MenuItem";

const Sidebar = () => {
  const user = getUser();

  const menu =
    user?.role === "student"
      ? studentSidebar
      : user?.role === "instructor"
      ? instructorSidebar
      : adminSidebar;

  return (
    <aside className="w-72 bg-[#0f172a] text-white flex flex-col p-5">

      {/* Logo */}
      <div className="mb-10 flex justify-center">

        <img
          src={mjx_school}
          alt="MJX School"
          className="h-16 object-contain"
        />

      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3">

        {menu.map((item) => (
          <MenuItem
            key={item.path}
            label={item.label}
            path={item.path}
            icon={item.icon}
          />
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;