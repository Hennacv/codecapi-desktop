import { IsNotEmpty } from "class-validator";

export class CreateAnswerDto {
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    questionId: number;
}
