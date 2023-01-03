import { Post, PrismaClient, User, Comment } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

export function createRandomUser(): User {
  return {
    email: faker.internet.email(),
    name: faker.name.fullName(),
    password: faker.internet.password(),
  } as User;
}
export function createRandomPost(): Post {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  } as Post;
}

export function createRandomComment(): Comment {
  return {
    commentText: faker.lorem.paragraph(4),
  } as Comment;
}
let sampleArr = (arr: Array<number>) => {
  let _i = Math.floor(Math.random() * arr.length);
  return arr[_i];
};
async function seed() {
  const prisma = new PrismaClient();
  let i = 0;
  let _size = 10;
  let users = [
    {
      id: 1,
      email: 'test@dev.com',
      name: 'test user',
      password: await bcrypt.hash('TestPass1$', 10),
    },
    {
      id: 2,
      email: 'test2@dev.com',
      name: 'test user 2',
      password: await bcrypt.hash('TestPass1$', 10),
    },
  ];
  let posts = [];
  let comments = [];

  await prisma.user.createMany({ data: users });
  let user_ids = [1, 2];
  while (i < _size * 2) {
    posts.push({
      ...createRandomPost(),
      authorId: sampleArr(user_ids),
    } as Post);
    i++;
  }
  i = 0;
  await prisma.post.createMany({ data: posts });
  let post_ids = (await prisma.post.findMany({ select: { id: true } })).map(
    (x) => x.id,
  );
  while (i < _size * 4) {
    comments.push({
      ...createRandomComment(),
      userId: sampleArr(user_ids),
      postId: sampleArr(post_ids),
    } as Comment);
    i++;
  }
  await prisma.comment.createMany({ data: comments });
}
seed();

console.log('seed.');
