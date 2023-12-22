import { IsEmail, IsString } from 'class-validator';

export class UserLogInDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
