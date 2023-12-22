import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: 'This is the secretKey for JWT Token',
      signOptions: { expiresIn: '10d' },
    }),
  ],
  providers: [UserService, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
