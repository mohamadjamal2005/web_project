import PageHeader from "../../components/common/PageHeader";

const Settings = () => {
  return (
    <div>

      <PageHeader
        title="Settings"
        description="Manage system preferences and school configurations."
      />

      <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            School Name
          </label>

          <input
            type="text"
            value="MJX School"
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            readOnly
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Academic Year
          </label>

          <input
            type="text"
            value="2025 - 2026"
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            readOnly
          />
        </div>

      </div>

    </div>
  );
};

export default Settings;