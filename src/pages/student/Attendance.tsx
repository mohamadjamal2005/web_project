import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Attendance = () => {
  return (
    <div>

      <PageHeader
        title="Attendance"
        description="Monitor your attendance records and class participation."
      />

      <Table
        headers={[
          "Course",
          "Attendance",
          "Absences",
          "Status",
        ]}
        data={[
          [
            "Mathematics",
            "95%",
            "2",
            "Excellent",
          ],

          [
            "Physics",
            "89%",
            "4",
            "Good",
          ],

          [
            "Chemistry",
            "92%",
            "3",
            "Very Good",
          ],
        ]}
      />

    </div>
  );
};

export default Attendance;