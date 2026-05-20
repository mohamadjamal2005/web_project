import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Submissions = () => {
  return (
    <div>

      <PageHeader
        title="Submissions"
        description="Review assignment submissions from students."
      />

      <Table
        headers={[
          "Student",
          "Assignment",
          "Submitted",
          "Status",
        ]}
        data={[
          [
            "Ahmad Jamal",
            "Math Homework",
            "Yes",
            "Reviewed",
          ],

          [
            "Ali Hassan",
            "Physics Report",
            "No",
            "Pending",
          ],
        ]}
      />

    </div>
  );
};

export default Submissions;