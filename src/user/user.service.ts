import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { userDetail } from './types/user.type';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(userData: userDetail) {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);
      let newUser = this.userRepository.create(userData);
      newUser = await this.userRepository.save(newUser);
      return {
        status: 'success',
        user: newUser,
      };
    } catch (error) {
      return {
        status: 'fail',
        message: 'Something went wrong',
        error: error,
      };
    }
  }

  async getUser(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
