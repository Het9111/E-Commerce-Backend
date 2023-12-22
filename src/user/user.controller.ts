import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUsertDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(+id);
  }

  @Post()
  addUser(@Body() data: CreateUsertDto) {
    return this.userService.createUser(data);
  }
}
