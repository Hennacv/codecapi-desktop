import { Answer } from 'renderer/utils/types';
import AnswerCard from './answer-card';

interface AnswerListProps {
    answers: Answer[];
}

function AnswerList({answers}: AnswerListProps) {

    const contrainerStyle = {
        margin: '1.5rem 0rem 1.5rem 0rem',
    };

    return (
        <div style={contrainerStyle}>
            {answers.map((answer: Answer) => (
                <AnswerCard answer={answer}/>
            ))}
        </div>
    );
} 

export default AnswerList;