import { Body, Controller, Post } from '@nestjs/common';
import { UserLogInDto } from 'src/auth/dto/userLogin.dto';
import { AuthService } from './auth.service';
import { UserSignUpDto } from './dto/userSignUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // route: auth/login - for login and generating JWT Token
  @Post('login')
  signIn(@Body() { email, password }: UserLogInDto) {
    return this.authService.login(email, password);
  }

  // route: auth/signup - for Signup and generating JWT Token
  @Post('signup')
  async signUp(@Body() userData: UserSignUpDto) {
    return await this.authService.signup(userData);
  }
}
