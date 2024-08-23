import { Controller, Get, Param } from '@nestjs/common';
import { PointsService } from './points.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('POINTS')
@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  // @Post()
  // create(@Body() createPointDto: CreatePointDto) {
  //   return this.pointsService.create(createPointDto);
  // }

  @Get()
  async findAll() {
    return await this.pointsService.find({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.pointsService.findOne({ where: { id } });
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePointDto: UpdatePointDto) {
  //   return this.pointsService.update(+id, updatePointDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pointsService.remove(+id);
  // }
}
