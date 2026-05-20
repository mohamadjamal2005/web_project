import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const MenuItem = ({label,path,icon}: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
        ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-gray-300 hover:bg-blue-800 hover:text-white"
        }`
      }
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </NavLink>
  );
};

export default MenuItem;