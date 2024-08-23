import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly surname?: string;

  @IsEmail()
  @ApiProperty()
  readonly phone: string;

  @IsString()
  @ApiProperty()
  readonly password?: string;
}
