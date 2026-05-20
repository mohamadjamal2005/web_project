import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Grades = () => {
  return (
    <div>

      <PageHeader
        title="Grades"
        description="Track your academic performance and exam results."
      />

      <Table
        headers={[
          "Course",
          "Exam",
          "Grade",
          "Status",
        ]}
        data={[
          [
            "Mathematics",
            "Midterm",
            "88%",
            "Passed",
          ],

          [
            "Physics",
            "Quiz",
            "91%",
            "Passed",
          ],

          [
            "Chemistry",
            "Final",
            "84%",
            "Passed",
          ],
        ]}
      />

    </div>
  );
};

export default Grades;