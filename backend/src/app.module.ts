import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..','frontend/build'),
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule
  ],
})
export class AppModule { }
