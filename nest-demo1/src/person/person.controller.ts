import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('find')
  /**
   * 查询函数
   *
   * @param name 姓名
   * @param age 年龄
   * @returns 返回包含姓名和年龄的字符串
   */
  query(@Query('name') name: string, @Query('age') age: number ) {
    return `name: ${name}, age: ${age}`;
  }

  @Post()
  /**
   * 创建人员
   *
   * @param createPersonDto 创建人员所需的数据传输对象
   * @returns 创建人员的结果
   */
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Post('uploadFile')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/',
  }))
  uploadFile(@Body() createPersonDto: CreatePersonDto, @UploadedFiles() files: Array<Express.Multer.File>){
    console.log(files, '文件');
    return {
      message: '文件上传成功',
      data: createPersonDto,
    }
  }


  @Get()
  /**
   * 查询所有人员信息
   *
   * @returns 返回所有人员信息的列表
   */
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  /**
   * 根据id查找一个人
   *
   * @param id 人员的id
   * @returns 返回找到的人员信息，若未找到则返回undefined
   */
  findOne(@Param('id') id: string) {
    const res =  this.personService.findOne(+id);
    return res;
  }

  @Patch(':id')
  /**
   * 更新人员信息
   *
   * @param id 人员ID
   * @param updatePersonDto 更新人员信息的DTO对象
   * @returns 更新后的人员信息
   */
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  /**
   * 根据id删除人员信息
   *
   * @param id 人员id
   * @returns 删除成功返回true，否则返回false
   */
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
