import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserDataDto } from '../auth/dto/user-data.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async isOwnedByAuthor(post_id: number, authorId: number): Promise<boolean> {
    let res = await this.prismaService.post.findFirst({
      where: { id: post_id, authorId },
    });
    return res ? true : false;
  }
  async createPost(post_data: CreatePostDto, userData: UserDataDto) {
    let data = {
      ...post_data,
      authorId: userData.id,
    };
    return this.prismaService.post.create({ data });
  }

  async updatePost(
    id: number,
    post_data: UpdatePostDto,
    userData: UserDataDto,
  ) {
    let data = {
      ...post_data,
      authorId: userData.id,
    };
    return this.prismaService.post.update({
      where: { id },
      data,
    });
  }

  async getAllPosts(limit: number) {
    return this.prismaService.post.findMany({
      take: limit,
      include: {
        author: true,
        comments: true,
      },
    });
  }
  async getPostsListing(limit: number, page: number) {
    return (
      await this.prismaService.post.findMany({
        take: limit,
        skip: (page - 1) * limit,
        include: {
          author: true,
          _count: {
            select: {
              comments: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
    ).map((x) => {
      let obj = {
        title: x.title,
        date: x.createdAt,
        authorName: x.author.name,
        commentCount: x._count.comments,
      };
      return obj;
    });
  }
  async deletePost(id: number, userData: UserDataDto) {
    let res = await this.prismaService.post.findMany({
      where: {
        authorId: userData.id,
        id: id,
        comments: {
          none: {
            postId: id,
          },
        },
      },
    });
    if (res.length) {
      return this.prismaService.post.delete({
        where: {
          id,
        },
        include: {
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });
    } else throw new NotAcceptableException('Post cannot be deleted');
  }
}
