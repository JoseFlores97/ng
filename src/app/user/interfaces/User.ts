export interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  birthdate: Date;
  logginCount: number;

  fullname: (email: string, lastname: string) => string;
}
