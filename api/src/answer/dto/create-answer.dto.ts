import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateAnswerDto {
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    questionId: number;
}
