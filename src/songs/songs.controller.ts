import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create('Sardor Abdullaev');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'fetch song on based on the id';
  }

  @Put(':id')
  update() {
    return 'update song on based on the id';
  }

  @Delete(':id')
  delete() {
    return 'delete song on based on the id';
  }
}
