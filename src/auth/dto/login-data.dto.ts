import { ApiProperty } from '@nestjs/swagger';

export default class LoginDataDto {
  @ApiProperty()
  access_token: string;
}
