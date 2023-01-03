import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpStatus,
  NotAcceptableException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { PaginationDto } from './dto/pagination.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly authService: AuthService,
  ) {}
  @Post()
  async createPost(
    @Body() data: CreatePostDto,
    @Headers('Authorization') authData: string,
  ) {
    let userData = this.authService.getHeaderData(authData);
    return this.postService.createPost(data, userData);
  }

  @Put(':id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePostDto,
    @Headers('Authorization') authData: string,
  ) {
    let userData = this.authService.getHeaderData(authData);
    let check = await this.postService.isOwnedByAuthor(id, userData.id);

    if (check) {
      return this.postService.updatePost(id, data, userData);
    } else throw new NotFoundException(`Post with id ${id} not found`);
  }

  @Get('')
  async getAllPosts(
    @Query(
      'limit',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        exceptionFactory: () =>
          new NotAcceptableException('limit query is missing or invalid.'),
      }),
    )
    limit: number,
  ) {
    return this.postService.getAllPosts(limit);
  }
  @Get('listing')
  async getPostListings(
    @Query(
      'limit',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        exceptionFactory: () =>
          new NotAcceptableException('limit query is missing or invalid.'),
      }),
    )
    limit: number,
    @Query(
      'page',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
        exceptionFactory: () =>
          new NotAcceptableException('page query is missing or invalid.'),
      }),
    )
    page: number,
  ) {
    if (limit < 2) {
      limit = 2;
    }
    if (page < 1) {
      page = 1;
    }
    return this.postService.getPostsListing(limit, page);
  }

  @Delete(':id')
  async deletePost(
    @Param('id', ParseIntPipe) id: number,
    @Headers('Authorization') authData: string,
  ) {
    let userData = this.authService.getHeaderData(authData);
    return this.postService.deletePost(id, userData);
  }
}
