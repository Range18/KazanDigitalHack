import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly age?: string;

  @IsDate()
  @IsOptional()
  readonly beginningAt?: Date;

  @IsDate()
  @IsOptional()
  readonly endingAt?: Date;

  @IsOptional()
  readonly category?: string;

  @IsNumber()
  @IsOptional()
  readonly price?: number;
}
