import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity/base-entity.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { Family } from '#src/core/families/entities/family.entity';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import NotFoundExceptions = AllExceptions.NotFoundExceptions;

@Injectable()
export class FamiliesService extends BaseEntityService<
  Family,
  'NotFoundExceptions'
> {
  constructor(
    @InjectRepository(Family) private readonly familyRep: Repository<Family>,
  ) {
    super(
      familyRep,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      ),
    );
  }
}
