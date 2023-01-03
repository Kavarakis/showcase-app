import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    await this.enablePreSave();
  }
  async enablePreSave() {
    this.$use(async (params, next) => {
      if (params.model == 'User' && params.action == 'create') {
        let pass = params.args.data.password;
        params.args.data.password = await bcrypt.hash(pass, 10);
      }
      return next(params);
    });
  }
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
