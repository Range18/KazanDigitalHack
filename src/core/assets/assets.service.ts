import { HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SectionsService } from '#src/core/sections/sections.service';

import { unlink } from 'fs/promises';
import { join } from 'path';
import { Section } from '#src/core/sections/entities/section.entity';
import { Event } from '#src/core/events/entities/event.entity';
import { EventsService } from '#src/core/events/events.service';
import { createReadStream } from 'fs';
import { BaseEntityService } from '#src/common/base-entity/base-entity.service';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import { GroundsService } from '#src/core/grounds/grounds.service';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { Ground } from '#src/core/grounds/entities/ground.entity';
import { storageConfig } from '#src/common/configs/storage.config';
import NotFoundExceptions = AllExceptions.NotFoundExceptions;

@Injectable()
export class AssetsService extends BaseEntityService<
  AssetEntity,
  'NotFoundExceptions'
> {
  constructor(
    @InjectRepository(AssetEntity)
    private readonly assetsRepository: Repository<AssetEntity>,
    private readonly sectionsService: SectionsService,
    private readonly eventsService: EventsService,
    private readonly groundService: GroundsService,
  ) {
    super(
      assetsRepository,
      new ApiException<'NotFoundExceptions'>(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      ),
    );
  }

  async upload(
    file: Express.Multer.File,
    id: number,
    type: 'section' | 'event' | 'ground',
  ) {
    let entity: Section | Event | Ground;

    switch (type) {
      case 'section':
        entity = await this.sectionsService.findOne({
          where: { id },
          // relations: { image: true },
        });

        if (!entity) {
          new ApiException<'NotFoundExceptions'>(
            HttpStatus.NOT_FOUND,
            'NotFoundExceptions',
            NotFoundExceptions.NotFound,
          );
        }

        break;

      case 'event':
        entity = await this.eventsService.findOne({
          where: { id },
          // relations: { image: true },
        });

        if (!entity) {
          new ApiException<'NotFoundExceptions'>(
            HttpStatus.NOT_FOUND,
            'NotFoundExceptions',
            NotFoundExceptions.NotFound,
          );
        }
        break;

      case 'ground':
        const ground = await this.groundService.findOne({
          where: { id },
          // relations: { image: true },
        });

        if (!ground) {
          new ApiException<'NotFoundExceptions'>(
            HttpStatus.NOT_FOUND,
            'NotFoundExceptions',
            NotFoundExceptions.NotFound,
          );
        }
        break;
    }

    if (entity.image) {
      // await unlink(join(storageConfig.rootPath, entity.image.name));
      //  await this.removeOne(entity.image);
    }

    return await this.save({
      name: file.filename,
      [type]: { id: id },
      type: type,
      mimetype: file.mimetype,
    });
  }

  async getFileStream(id: number) {
    const image = await this.findOne({ where: { id } });

    if (!image) {
      new ApiException<'NotFoundExceptions'>(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      );
    }

    try {
      const stream = createReadStream(join(storageConfig.rootPath, image.name));

      return { buffer: new StreamableFile(stream), mimetype: image.mimetype };
    } catch (error) {
      new ApiException<'NotFoundExceptions'>(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      );
    }
  }

  async deleteFile(id: number) {
    const image = await this.findOne({ where: { id } });

    if (!image) {
      new ApiException<'NotFoundExceptions'>(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      );
    }

    try {
      await unlink(join(storageConfig.rootPath, image.name));
    } catch (error) {
      new ApiException<'NotFoundExceptions'>(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      );
    }
  }
}
