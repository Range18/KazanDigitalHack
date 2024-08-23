import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { Event } from '#src/core/events/entities/event.entity';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import { BaseEntityService } from '#src/common/base-entity/base-entity.service';
import NotFoundExceptions = AllExceptions.NotFoundExceptions;

@Injectable()
export class EventsService extends BaseEntityService<
  Event,
  'NotFoundExceptions'
> {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {
    super(
      eventRepository,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'NotFoundExceptions',
        NotFoundExceptions.NotFound,
      ),
    );
  }
}
