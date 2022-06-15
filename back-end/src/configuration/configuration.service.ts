import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService) {}

  public get port(): number {
    return this.configService.get<number>('PORT');
  }

  public get dbUri(): string {
    return this.configService.get<string>('MONGO_URI');
  }

  public get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
}
