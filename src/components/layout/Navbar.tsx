import LogoutIcon from "@mui/icons-material/Logout";

import { getUser, logout } from "../../utils/auth";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = getUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div className="text-right">
          <p className="font-semibold text-gray-800">
            {user?.firstName} {user?.lastName}
          </p>

          <p className="text-sm text-gray-500 capitalize">
            {user?.role}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition"
        >
          <LogoutIcon />
        </button>

      </div>

    </header>
  );
};

export default Navbar;