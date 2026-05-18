import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">
          MJX School
        </h2>

        <nav className="space-y-3">
          <p>Dashboard</p>
          <p>Courses</p>
          <p>Grades</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;