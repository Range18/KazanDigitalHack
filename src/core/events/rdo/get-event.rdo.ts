import { Event } from '#src/core/events/entities/event.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetEventRdo {
  @ApiProperty()
  readonly id: number;

  readonly name: string;

  readonly description: string;

  readonly age?: string;

  beginningAt?: Date;

  endingAt?: Date;

  readonly category: string;

  readonly price: number;

  // readonly image?: GetFileRdo;
  readonly image?: string;

  address: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(event: Event) {
    this.id = event.id;
    this.name = event.name;
    this.description = event.description;
    this.beginningAt = event.beginningAt;
    this.endingAt = event.endingAt;
    this.price = event.price;
    this.category = event.category;
    this.address = event.address;

    // this.image = event.image ? new GetFileRdo(event.image) : undefined;
    this.image = event.image;

    this.createdAt = event.createdAt;
    this.updatedAt = event.updatedAt;
  }
}
