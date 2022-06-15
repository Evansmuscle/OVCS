import { IsEmail } from 'class-validator';

export class FindUserFromEmailDto {
  @IsEmail({}, { message: 'Not an email' })
  email: string;
}
