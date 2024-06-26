import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder , SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Complex CRUD')
  .setDescription('CRUD with authentication and roles')
  .setVersion('1.0')
  .addTag('users')
  .addTag('posts')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
