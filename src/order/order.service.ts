import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { OrderType } from './type/order.type';
import { userInfo } from 'os';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getAllOrder() {
    let orders = await this.orderRepository.find();

    return {
      length: orders.length,
      status: 'success',
      orders,
    };
  }

  async createOrder(orderDetail: OrderType) {
    try {
      let newOrder = this.orderRepository.create(orderDetail);
      newOrder = await this.orderRepository.save(newOrder);
      return {
        status: 'success',
        newOrder,
      };
    } catch (err) {
      return {
        status: 'fail',
        errMessage: err.message,
      };
    }
  }

  async getOrderById(id: number) {
    try {
      let order = await this.orderRepository.findOneBy({ id });
      return {
        status: 'success',
        order,
      };
    } catch (err) {
      return {
        status: 'fail',
        errMessage: err.message,
      };
    }
  }

  async deleteOrder(id: number) {
    try {
      this.orderRepository.delete(id);
      return {
        status: 'success',
      };
    } catch (err) {
      return {
        status: 'fail',
        errMessage: err.message,
      };
    }
  }

  async orderByUserId(id: number) {
    return await this.orderRepository.find({ where: { userId: id } });
  }

  async getOrdersByUserId(id: number) {
    let orders = await this.orderRepository.find({ where: { userId: id } });
    return {
      status: 'success',
      orders,
    };
  }
}
