import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsDate()
  @IsOptional()
  readonly beginningAt?: Date;

  @IsDate()
  @IsOptional()
  readonly endingAt?: Date;

  readonly category: string;

  @IsNumber()
  readonly price: number;
}
