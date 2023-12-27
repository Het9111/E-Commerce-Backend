import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { OrderModule } from 'src/order/order.module';
import { OrderService } from 'src/order/order.service';
import { Order } from 'src/order/entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order]), OrderModule],
  providers: [UserService, OrderService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
