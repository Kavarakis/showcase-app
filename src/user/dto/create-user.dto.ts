import { User } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto implements Partial<User> {
  @ApiProperty()
  @IsString({ message: 'name is not String format' })
  name?: string;
  @ApiProperty()
  @IsDefined({ message: 'Email is mandatory attribute' })
  @IsEmail({
    message: 'Email is not correct',
  })
  email: string;
  @ApiProperty()
  @IsDefined({ message: 'Password is mandatory attribute' })
  @IsString({ message: 'Password is not String format' })
  @MinLength(6, { message: 'Password needs to be at least 6 characters long' })
  @Matches(new RegExp('(?=.*[A-Z])'), {
    message: 'Password must contain at least one upper case letter',
  })
  @Matches(new RegExp("(?=.*[#%'*/<()>}{:`;,!& .?_$+-])"), {
    message: 'Password must contain at least one special character',
  })
  @ApiProperty()
  password: string;
}
