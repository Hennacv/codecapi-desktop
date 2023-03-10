import { Answer } from 'renderer/utils/types';
import AnswerCard from './answer-card';

interface AnswerListProps {
    answers: Answer[];
}

function AnswerList({answers}: AnswerListProps) {
    return (
        <div className="">
            <h1 className="">{ answers.length } antwoorden</h1>
            {answers.map((answer: Answer) => (
                <AnswerCard key={answer.id} answer={answer}/>
            ))}
        </div>
    );
} 

export default AnswerList;