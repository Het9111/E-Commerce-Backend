import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { secret, expiretionTime } from './constant/JwtServiceConfig';
import { AuthGuard } from './auth.guard';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: secret,
      signOptions: { expiresIn: expiretionTime },
    }),
  ],
  providers: [UserService, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
