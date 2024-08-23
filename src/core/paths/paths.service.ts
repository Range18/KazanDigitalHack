import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity/base-entity.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import { Path } from '#src/core/paths/entities/path.entity';
import NotFoundExceptions = AllExceptions.NotFoundExceptions;

@Injectable()
export class PathsService extends BaseEntityService<
  Path,
  'NotFoundExceptions'
> {
  constructor(
    @InjectRepository(Path) private readonly pathRep: Repository<Path>,
  ) {
    super(
      pathRep,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      ),
    );
  }
}
