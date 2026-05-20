import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Classes = () => {
  return (
    <div>

      <PageHeader
        title="Classes"
        description="Manage all assigned classes and schedules."
      />

      <Table
        headers={[
          "Class",
          "Students",
          "Schedule",
          "Room",
        ]}
        data={[
          [
            "Grade 10-A",
            "32",
            "Mon - Wed",
            "A101",
          ],

          [
            "Grade 11-B",
            "28",
            "Tue - Thu",
            "B205",
          ],
        ]}
      />

    </div>
  );
};

export default Classes;