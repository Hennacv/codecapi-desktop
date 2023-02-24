import { Answer } from 'renderer/utils/types';
import AnswerCard from './answer-card';

interface AnswerListProps {
    answers: Answer[];
}

function AnswerList({answers}: AnswerListProps) {
    return (
        <div className=" flex flex-col items-end mt-6 mb-6 gap-4">
            <h1 className="self-start text-gray-400">{ answers.length } antwoorden</h1>
            {answers.map((answer: Answer) => (
                <AnswerCard key={answer.id} answer={answer}/>
            ))}
        </div>
    );
} 

export default AnswerList;