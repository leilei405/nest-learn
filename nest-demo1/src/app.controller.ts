import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // AppController 的构造器里参数里声明了 AppService 的依赖，就会自动注入
  // constructor(private readonly appService: AppService) {}

  // 如果不想用构造器注入，也可以属性注入，但是属性注入只能注入一次，不能多次注入
  @Inject(AppService)
  private readonly appService: AppService;


  @Get()
  getHello(): string {
    console.log(this);
    return this.appService.getHello();
  }
}
