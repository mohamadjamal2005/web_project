import type { AuthUser } from "../types/auth.types";

interface FakeUser extends AuthUser {
  username: string;
  password: string;
}

export const users: FakeUser[] = [
  {
    id: 1,
    name: "Ahmad Jamal",
    email: "ahamadjamal@student.mjxschool.com",
    username: "ahamadjamal",
    password: "123456",
    role: "student",
  },

  {
    id: 2,
    name: "John Doe",
    email: "johndoe@instructor.mjxschool.com",
    username: "johndoe",
    password: "234567",
    role: "instructor",
  },

  {
    id: 3,
    name: "Rachid Idris",
    email: "rachididris@admin.mjxschool.com",
    username: "rachididris",
    password: "345678",
    role: "admin",
  },
];