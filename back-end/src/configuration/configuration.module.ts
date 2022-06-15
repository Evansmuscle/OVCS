import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import * as Joi from 'joi';

import { ConfigurationService } from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3001),
        MONGO_URI: Joi.string(),
        JWT_SECRET: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigurationService, ConfigService],
  exports: [ConfigurationService, ConfigService],
})
export class ConfigurationModule {}
