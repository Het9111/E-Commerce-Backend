import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUsertDto } from './dto/createUser.dto';
import { OrderService } from 'src/order/order.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly orderService: OrderService,
  ) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(+id);
  }

  @Post()
  addUser(@Body() data: CreateUsertDto) {
    return this.userService.createUser(data);
  }

  @Get('order/:id')
  getUsersAllOrders(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getOrdersByUserId(id);
  }
}
