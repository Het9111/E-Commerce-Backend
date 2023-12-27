import { IsNumber, IsObject, IsString } from 'class-validator';
import { User } from 'src/user/entity/user.entity';

export class createOrderDto {
  @IsNumber()
  id: number;

  @IsObject()
  user: User;

  @IsString()
  address: string;

  @IsString()
  date: string;
}
