import PageHeader from "../../components/common/PageHeader";
import Table from "../../components/common/Table";

const Users = () => {
  return (
    <div>

      <PageHeader
        title="Users"
        description="Manage students, instructors, and administrators."
      />

      <Table
        headers={[
          "First Name",
          "Last Name",
          "Role",
          "Email",
          "Status",
        ]}
        data={[
          [
            "Ahmad",
            "Jamal",
            "Student",
            "ahmadjamal@student.mjxschool.com",
            "Active",
          ],

          [
            "John",
            "Doe",
            "Instructor",
            "johndoe@instructor.mjxschool.com",
            "Active",
          ],

          [
            "Rachid",
            "Idris",
            "Admin",
            "rachididris@admin.mjxschool.com",
            "Active",
          ],
        ]}
      />

    </div>
  );
};

export default Users;