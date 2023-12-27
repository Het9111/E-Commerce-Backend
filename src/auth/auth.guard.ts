import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { secret } from './../auth/constant/JwtServiceConfig';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    let req = context.switchToHttp().getRequest();

    let [type, token] = req.headers?.authorization?.split(' ') ?? [];

    if (!token) {
      return false;
    }
    if (type === 'Bearer' && token) {
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: secret,
        });
        req['user'] = payload;
        return true;
      } catch (err) {
        console.log('Error in getting user from token or Toke Expires');
      }
    }
  }
}
