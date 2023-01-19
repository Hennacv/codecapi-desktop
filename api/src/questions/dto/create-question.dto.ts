import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, ValidateNested } from 'class-validator';

class TagIdDto {
  @IsInt()
  id: number;
}

export class CreateQuestionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  text: string;

  @IsArray()
  @ValidateNested()
  @Type(() => TagIdDto)
  tags: TagIdDto[] = [];
}
