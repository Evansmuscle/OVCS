import { IsEmail, MinLength } from 'class-validator';

export class UserSignupDto {
  @IsEmail({}, { message: 'Not a valid email' })
  email: string;

  @MinLength(4, { message: 'A password must have a minimum length of 4' })
  password: string;
}
