import dayjs from 'renderer/utils/dayjs';
import { Answer } from "renderer/utils/types";

interface AnswerCardProps {
    answer: Answer;
}

function AnswerCard({ answer }: AnswerCardProps) { 
    return (
        <div className="bg-white shadow-cards border border-gray-100 rounded-xl p-6 flex flex-col gap-4" key={answer.id}>
            <div className="w-full flex flex-row items-center justify-end">
                <p className="text-xs text-gray-400 w-fit">{dayjs(answer.createdAt).fromNow()}</p>
            </div>
            <p>{answer.text}</p>
        </div> 
    )
}

export default AnswerCard;
