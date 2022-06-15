import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ email });

    if ('message' in user || !user) {
      return null;
    }

    const valid = await argon.verify(user.password, password);

    if (valid) {
      const { _id, email } = user;
      const idStr = _id.toString();

      return { _id: idStr, email };
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user._id };
    console.log(payload);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
