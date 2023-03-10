import dayjs from 'renderer/utils/dayjs';
import { Answer } from "renderer/utils/types";

interface AnswerCardProps {
    answer: Answer;
}

function AnswerCard({ answer }: AnswerCardProps) { 
    return (
        <div className="" key={answer.id}>
            <div className="">
                <p className="">{dayjs(answer.createdAt).fromNow()}</p>
            </div>
            <p>{answer.text}</p>
        </div> 
    )
}

export default AnswerCard;
