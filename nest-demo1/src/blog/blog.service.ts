import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  /**
   * 创建一个新的博客
   *
   * @param createBlogDto 创建博客所需的参数
   * @returns 返回字符串提示创建成功
   */
  create(createBlogDto: CreateBlogDto) {
    return 'This action adds a new blog';
  }

  /**
   * 查找所有博客
   *
   * @returns 返回所有博客的字符串
   */
  findAll() {
    return `This action returns all blog`;
  }

  /**
   * 根据 id 查找博客
   *
   * @param id 博客的 id
   * @returns 返回一个字符串，格式为 "This action returns a #${id} blog"
   */
  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  /**
   * 更新博客
   *
   * @param id 博客ID
   * @param updateBlogDto 更新博客的数据传输对象
   * @returns 返回更新博客的提示信息
   */
  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  /**
   * 移除博客
   * @param id 博客ID
   * @returns 返回移除博客的提示信息
   */
  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
