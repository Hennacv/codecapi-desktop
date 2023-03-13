import { Transform } from 'class-transformer';
import { IsNotEmpty, IsHexColor, IsOptional } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsHexColor()
  @Transform(({ value }) => value.toLowerCase())
  color: string;
}