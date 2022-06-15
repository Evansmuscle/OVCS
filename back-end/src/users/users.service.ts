import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon from 'argon2';

import { FindUserFromEmailDto } from './dto/user.find-from-email.dto';
import { UserSignupDto } from './dto/user-signup.dto';

import { UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') protected readonly userModel: Model<UserDocument>,
  ) {}

  async findOne({
    email,
  }: FindUserFromEmailDto): Promise<
    (UserDocument & { _id: string }) | { message: string }
  > {
    try {
      const user = await this.userModel.findOne({ email });

      if (!user) {
        return {
          message: 'User not found',
        };
      }

      return user;
    } catch (err) {
      return {
        message: err.message,
      };
    }
  }

  async signup({ email, password }: UserSignupDto) {
    try {
      const existingUser = await this.userModel.findOne({ email });

      if (existingUser) {
        return {
          message: 'User already exists',
        };
      }

      const user = await this.userModel.create({
        email,
        password: await argon.hash(password),
      });

      return user;
    } catch (err) {
      return {
        message: err.message,
      };
    }
  }
}
