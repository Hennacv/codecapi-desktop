import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

class QuestionIdDto {
    @IsInt()
    id: number;
}

export class CreateAnswerDto {
    @IsNotEmpty()
    text: string;

    @Type(() => QuestionIdDto)
    question_id: QuestionIdDto;
}
