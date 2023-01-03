import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { UserDataDto } from '../auth/dto/user-data.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async createComment(commentData: CreateCommentDto, userData: UserDataDto) {
    return this.prismaService.comment.create({
      data: {
        commentText: commentData.commentText,
        postId: commentData.postId,
        userId: userData.id,
      },
    });
  }
}
