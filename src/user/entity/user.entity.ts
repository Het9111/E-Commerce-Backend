import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../types/user.type';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
