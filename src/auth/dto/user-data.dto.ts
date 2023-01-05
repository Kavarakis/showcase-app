import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserDataDto implements Partial<User> {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
}
