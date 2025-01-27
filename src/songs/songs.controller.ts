import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService,
    @Inject('CONNECTION') private connection: Connection
  ) {
    console.log(`This is a connetion string: ${this.connection.CONNECTION_STRING}`);
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, { cause: error })
    }
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return `fetch song on based on the id ${typeof id}`;
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
