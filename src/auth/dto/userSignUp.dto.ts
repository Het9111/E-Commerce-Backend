import { IsString, IsEmail, IsNumber } from 'class-validator';
import { Role } from 'src/user/types/user.type';

export class UserSignUpDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  address: string;

  @IsNumber()
  phone: string;

  @IsString()
  role: Role;
}
