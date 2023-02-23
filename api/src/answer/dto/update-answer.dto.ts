import { IsNotEmpty } from 'class-validator';

export class UpdateAnswerDto {
    @IsNotEmpty()
    text: string;
}
