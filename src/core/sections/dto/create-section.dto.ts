import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  readonly address: string;

  readonly category: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  price: number;

  @IsString()
  readonly name: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  days?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  beginningAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  endingAt?: Date;
}
