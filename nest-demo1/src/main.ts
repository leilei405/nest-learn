import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 设置全局路由的前缀
  app.setGlobalPrefix('/api');
  
  app.useStaticAssets('public', { prefix: '/static'});
  await app.listen(3000);
}
bootstrap();
