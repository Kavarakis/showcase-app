import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import {
  MockContext,
  Context,
  createMockContext,
} from '../../test/mocks/prisma.mock';
import { PrismaModule } from '../prisma/prisma.module';
describe('CommentService', () => {
  let service: CommentService;
  let mockCtx: MockContext;
  let ctx: Context;
  beforeEach(async () => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CommentService],
    })
      .useMocker((token) => {
        if (token == CommentService) {
          return ctx.prisma;
        }
      })
      .compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
