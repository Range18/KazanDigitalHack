import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GroundsService } from './grounds.service';
import { CreateGroundDto } from './dto/create-ground.dto';
import { UpdateGroundDto } from './dto/update-ground.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GetGroundRdo } from '#src/core/grounds/rdo/get-ground.rdo';

@ApiTags('Grounds')
@Controller('grounds')
export class GroundsController {
  constructor(private readonly groundsService: GroundsService) {}

  @ApiCreatedResponse({ type: GetGroundRdo })
  @Post()
  async create(@Body() createGroundDto: CreateGroundDto) {
    return new GetGroundRdo(await this.groundsService.save(createGroundDto));
  }

  @ApiQuery({ name: 'category', type: String })
  @Get()
  async findAll(@Query('category') category: string) {
    const grounds = await this.groundsService.find({
      where: { category },
      // relations: { image: true },
    });

    return grounds.map((ground) => new GetGroundRdo(ground));
  }

  @ApiOkResponse({ type: GetGroundRdo })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetGroundRdo(
      await this.groundsService.findOne({
        where: { id },
        // relations: { image: true },
      }),
    );
  }

  @ApiOkResponse({ type: GetGroundRdo })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateGroundDto: UpdateGroundDto,
  ) {
    return new GetGroundRdo(
      await this.groundsService.updateOne({ where: { id } }, updateGroundDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.groundsService.removeOne({ where: { id } });
  }
}
