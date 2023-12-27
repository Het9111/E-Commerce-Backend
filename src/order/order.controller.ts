import {
  Body,
  Controller,
  Delete,
  ExecutionContext,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { createOrderDto } from './dto/createOrder.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('order')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getAllOrder() {
    console.log('controller');
    return this.orderService.getAllOrder();
  }

  @Get(':id')
  getAllOrderWithId(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getOrderById(id);
  }

  @Post()
  createOrder(@Body() order: createOrderDto) {
    return this.orderService.createOrder(order);
  }

  @Delete(':id')
  deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.deleteOrder(id);
  }

  @Get('userorder/:id')
  @UseGuards(AuthGuard)
  getUserSpecificOrders(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.orderByUserId(id);
  }
}
