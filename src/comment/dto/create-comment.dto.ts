import { ApiProperty } from '@nestjs/swagger';
import { Comment, Post } from '@prisma/client';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto implements Partial<Comment> {
  @ApiProperty()
  @IsString({ message: 'commentText should be a string.' })
  @IsNotEmpty({ message: 'commentText cannot be empty' })
  commentText?: string;
  @IsInt({ message: 'postId should be string' })
  @ApiProperty()
  postId: number;
}
