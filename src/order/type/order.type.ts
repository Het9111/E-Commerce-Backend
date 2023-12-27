import { User } from 'src/user/entity/user.entity';

export type OrderType = {
  id: number;
  user: User;
  address: string;
  date: string;
};
