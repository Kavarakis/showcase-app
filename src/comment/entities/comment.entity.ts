import { Comment } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export default class CommentEntity implements Comment {
  @ApiProperty()
  id: number;
  @ApiProperty()
  commentText: string;
  @ApiProperty()
  postId: number;
  @ApiProperty()
  userId: number;
}
