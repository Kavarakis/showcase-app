import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async userLogin(@Body() data: LoginUserDto) {
    const res: User | null = await this.authService.validateEmployee(data);
    if (!res) {
      throw new UnauthorizedException();
    }

    return this.authService.loginWithCredentials(res);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async get(@Headers('Authorization') auth: string) {
    return this.authService.getHeaderData(auth);
  }
}
