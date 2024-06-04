import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [UserModule, BlogModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
