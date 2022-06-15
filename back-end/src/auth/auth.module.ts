import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from 'src/users/users.module';

import { AuthService } from './auth.service';

import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';

import { ConfigurationModule } from 'src/configuration/configuration.module';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schema/user.schema';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigurationModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigurationService) => ({
        secret: configService.jwtSecret,
        signOptions: { expiresIn: '10d' },
      }),
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
    }),
    MongooseModule.forFeature([{ schema: UserSchema, name: 'User' }]),
  ],
  providers: [AuthService, ConfigurationService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
