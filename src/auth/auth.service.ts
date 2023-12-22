import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { userDetail } from './types/user.type';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Login method : returns JWT token if credentioals are currect.
  async login(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      return {
        status: 'fail',
        message: 'No user with This Credentials! Enter valid user Credentials',
      };
    }
    if (user?.password && (await bcrypt.compare(password, user.password))) {
      const payload = { userId: user.id, email: user.email, role: user.role };
      const token = await this.jwtService.signAsync({ payload });
      return {
        status: 'success',
        token,
      };
    }
  }

  protect() {}

  async signup(userData: userDetail) {
    const existUser = await this.userService.getUserByEmail(userData.email);
    if (existUser) {
      return {
        status: 'fail',
        message:
          'User Already exist with this Email id. Please try with different Email id.',
      };
    }
    const response = await this.userService.createUser(userData);

    if (response?.status === 'fail') {
      return response;
    }
    if (response.status === 'success') {
      const { user } = response;
      const payload = { userId: user.id, email: user.email, role: user.role };
      const token = await this.jwtService.signAsync({ payload });
      return {
        status: 'success',
        token,
      };
    }
  }
}
