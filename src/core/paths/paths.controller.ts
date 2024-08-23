import { Controller, Get, Param } from '@nestjs/common';
import { PathsService } from './paths.service';

@Controller('paths')
export class PathsController {
  constructor(private readonly pathsService: PathsService) {}

  // @Post()
  // create(@Body() createPathDto: CreatePathDto) {
  //   return this.pathsService.create(createPathDto);
  // }

  @Get()
  async findAll() {
    return await this.pathsService.find({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.pathsService.findOne({ where: { id } });
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePathDto: UpdatePathDto) {
  //   return this.pathsService.update(+id, updatePathDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pathsService.remove(+id);
  // }
}
