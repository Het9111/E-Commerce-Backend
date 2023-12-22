import { Role } from 'src/user/types/user.type';

export type userDetail = {
  name: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  role: Role;
};
