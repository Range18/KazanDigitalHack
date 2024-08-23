import { HttpStatus, Injectable } from '@nestjs/common';
import { Ground } from '#src/core/grounds/entities/ground.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { BaseEntityService } from '#src/common/base-entity/base-entity.service';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import NotFoundExceptions = AllExceptions.NotFoundExceptions;

@Injectable()
export class GroundsService extends BaseEntityService<
  Ground,
  'NotFoundExceptions'
> {
  constructor(
    @InjectRepository(Ground)
    private readonly groundRepository: Repository<Ground>,
  ) {
    super(
      groundRepository,
      new ApiException<'NotFoundExceptions'>(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      ),
    );
  }
}
