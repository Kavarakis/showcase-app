import { User } from '@prisma/client';

export class UserDataDto implements Partial<User> {
  id: number;
  email: string;
}
