import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [AuthModule, PrismaModule],
})
export class PostModule {}
