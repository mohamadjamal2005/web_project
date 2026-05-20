import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Students = () => {
  return (
    <div>

      <PageHeader
        title="Students"
        description="View and manage student information."
      />

      <Table
        headers={[
          "Name",
          "Class",
          "Attendance",
          "Average",
        ]}
        data={[
          [
            "Ahmad Jamal",
            "Grade 10",
            "94%",
            "88%",
          ],

          [
            "Ali Hassan",
            "Grade 11",
            "91%",
            "84%",
          ],
        ]}
      />

    </div>
  );
};

export default Students;