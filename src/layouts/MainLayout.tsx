import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-8 flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MainLayout;