import { IsString, IsEmail, IsNumber, IsEnum } from 'class-validator';
import { Role } from '../types/user.type';

export class CreateUsertDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  address: string;

  @IsString()
  role: Role;

  @IsNumber()
  phone: string;
}
