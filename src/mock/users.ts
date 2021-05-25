import { User } from 'src/app/user/interfaces/User';

export const USERS: User[] = [
  {
    avatar: '123',
    birthdate: new Date(),
    email: '',
    fullname: (email: string, lastname: string) => {
      return email + lastname;
    },
    lastname: '',
    logginCount: 1,
    name: '',
    password: '',
  },
];
