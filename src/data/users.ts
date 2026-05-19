import type { AuthUser } from "../types/auth.types";

interface FakeUser extends AuthUser {
  username: string;
  password: string;
}

export const users: FakeUser[] = [
  {
    id: 1,
    firstName: "Ahmad",
    lastName: "Jamal",
    email: "ahmadjamal@student.mjxschool.com",
    username: "ahmadjamal",
    password: "123456",
    role: "student",
  },

  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@instructor.mjxschool.com",
    username: "johndoe",
    password: "234567",
    role: "instructor",
  },

  {
    id: 3,
    firstName: "Rachid",
    lastName: "Idris",
    email: "rachididris@admin.mjxschool.com",
    username: "rachididris",
    password: "345678",
    role: "admin",
  },
];