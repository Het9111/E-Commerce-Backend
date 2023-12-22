export type userDetail = {
  name: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  role: Role;
};

export enum Role {
  USER = 'user',
  VENDOR = 'vendor',
  ADMIN = 'admin',
}
