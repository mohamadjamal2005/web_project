import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Courses = () => {
  return (
    <div>

      <PageHeader
        title="Courses"
        description="View all enrolled courses and schedules."
      />

      <Table
        headers={[
          "Course",
          "Instructor",
          "Schedule",
          "Room",
        ]}
        data={[
          [
            "Mathematics",
            "John Smith",
            "Mon - Wed",
            "A101",
          ],

          [
            "Physics",
            "Sarah Johnson",
            "Tue - Thu",
            "B202",
          ],

          [
            "Chemistry",
            "Michael Brown",
            "Fri",
            "C303",
          ],
        ]}
      />

    </div>
  );
};

export default Courses;