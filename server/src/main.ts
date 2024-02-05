import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { PrismaService } from "./prisma/prisma.service";
import {PORT} from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  })
  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)
  await app.listen(PORT);
}
bootstrap();
