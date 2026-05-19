export type UserRole =
  | "student"
  | "instructor"
  | "admin";

export interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}