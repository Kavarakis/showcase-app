import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { UserDataDto } from './dto/user-data.dto';
import LoginDataDto from './dto/login-data.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtTokenService: JwtService,
  ) {}
  async validateEmployee(data: LoginUserDto): Promise<User | null> {
    const user: User | null = await this.userService.getUserByEmail(data.email);
    if (user && (await bcrypt.compare(data.password, user.password))) {
      return user;
    }
    return null;
  }

  loginWithCredentials(user: User): LoginDataDto {
    const payload = { username: user.email, sub: user.id };
    return { access_token: this.jwtTokenService.sign(payload) };
  }

  getHeaderData(auth: string) {
    const token = auth.replace('Bearer ', '');
    const data = this.jwtTokenService.decode(token, { json: true });
    return { email: data['username'], id: data['sub'] } as UserDataDto;
  }
}
