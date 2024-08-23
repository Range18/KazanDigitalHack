import { HttpStatus, Injectable } from '@nestjs/common';
import { Section } from '#src/core/sections/entities/section.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import { BaseEntityService } from '#src/common/base-entity/base-entity.service';
import NotFoundExceptions = AllExceptions.NotFoundExceptions;

@Injectable()
export class SectionsService extends BaseEntityService<
  Section,
  'NotFoundExceptions'
> {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {
    super(
      sectionRepository,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      ),
    );
  }
}
