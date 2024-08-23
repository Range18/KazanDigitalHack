import { ApiProperty } from '@nestjs/swagger';
import { Section } from '#src/core/sections/entities/section.entity';

export class GetSectionRdo {
  readonly id: number;

  readonly address: string;

  readonly age: string;

  readonly category: string;

  @ApiProperty({ nullable: true })
  readonly description?: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  readonly rating: number;

  @ApiProperty({ nullable: true })
  days?: string;

  @ApiProperty({ nullable: true })
  beginningAt?: Date;

  @ApiProperty({ nullable: true })
  endingAt?: Date;

  // @ApiProperty({ nullable: true, type: GetFileRdo })
  // readonly image?: GetFileRdo;

  readonly image?: string;

  readonly createdAt: Date;

  readonly updatedAt: Date;

  constructor(section: Section) {
    this.id = section.id;
    this.name = section.name;
    this.address = section.address;
    this.description = section.description;
    this.days = section.days;
    this.beginningAt = section.beginningAt;
    this.endingAt = section.endingAt;
    this.category = section.category;
    this.price = section.price;

    this.image = section.image;

    this.createdAt = section.createdAt;
    this.updatedAt = section.updatedAt;
  }
}
