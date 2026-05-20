import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Reports = () => {
  return (
    <div>

      <PageHeader
        title="Reports"
        description="Analyze school performance and statistics."
      />

      <Table
        headers={[
          "Report",
          "Category",
          "Generated",
          "Status",
        ]}
        data={[
          [
            "Attendance Report",
            "Students",
            "Today",
            "Completed",
          ],

          [
            "Grades Summary",
            "Academic",
            "Yesterday",
            "Completed",
          ],
        ]}
      />

    </div>
  );
};

export default Reports;