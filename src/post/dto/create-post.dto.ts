import { ApiProperty } from '@nestjs/swagger';
import { Post } from '@prisma/client';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePostDto implements Partial<Post> {
  @ApiProperty()
  @IsNotEmpty({ message: 'title cannot be empty' })
  @IsString({ message: 'title is not String format' })
  @MaxLength(255, { message: 'title can contain maximu of 255 characters' })
  title: string;
  @IsString({ message: 'title is not String format' })
  @ApiProperty()
  description: string;
}
