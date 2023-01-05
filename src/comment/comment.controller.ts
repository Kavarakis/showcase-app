import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { UserDataDto } from '../auth/dto/user-data.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

import CommentEntity from './entities/comment.entity';

@UseGuards(JwtAuthGuard)
@Controller('comment')
@ApiTags('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly authService: AuthService,
  ) {}
  @Post()
  @ApiOkResponse({ type: CommentEntity })
  async createComment(
    @Body() data: CreateCommentDto,
    @Headers('Authorization') auth: string,
  ) {
    let userData: UserDataDto = this.authService.getHeaderData(auth);
    return this.commentService.createComment(data, userData);
  }
}
