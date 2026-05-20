import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Assignments = () => {
  return (
    <div>

      <PageHeader
        title="Assignments"
        description="Track assignment deadlines and submissions."
      />

      <Table
        headers={[
          "Assignment",
          "Course",
          "Deadline",
          "Status",
        ]}
        data={[
          [
            "Math Homework",
            "Mathematics",
            "May 20",
            "Pending",
          ],

          [
            "Physics Report",
            "Physics",
            "May 25",
            "Submitted",
          ],
        ]}
      />

    </div>
  );
};

export default Assignments;