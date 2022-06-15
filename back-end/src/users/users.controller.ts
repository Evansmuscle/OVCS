import { Body, Controller, Post } from '@nestjs/common';

import { UserSignupDto } from './dto/user-signup.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() userSignupDto: UserSignupDto) {
    return await this.usersService.signup(userSignupDto);
  }
}
