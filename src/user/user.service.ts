import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }
  async createUser(data: CreateUserDto) {
    const user: User | null = await this.getUserByEmail(data.email);
    if (user) {
      throw new HttpException(
        `Existing user with email:${user.email} - Unique Constraint`,
        HttpStatus.CONFLICT,
      );
    }
    // const hash = await bcrypt.hash(data.password, 10);
    // data.password = hash;
    return this.prismaService.user.create({ data });
  }
}
