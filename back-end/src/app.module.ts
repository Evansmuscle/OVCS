import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    ConfigurationModule,
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (configService: ConfigurationService) => ({
        uri: configService.dbUri,
      }),
      inject: [ConfigurationService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
