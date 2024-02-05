import { Module } from '@nestjs/common';
import {BookModule} from "../book/book.module";
import {AuthorModule} from "../author/author.module";
import {PrismaModule} from "../prisma/prisma.module";


@Module({
  imports: [BookModule, AuthorModule, PrismaModule],
})
export class AppModule {}
