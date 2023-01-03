import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [CommentService],
  controllers: [CommentController],
  imports: [PrismaModule, AuthModule],
})
export class CommentModule {}
