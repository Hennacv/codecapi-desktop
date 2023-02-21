import { Answer } from 'renderer/utils/types';
import AnswerCard from './answer-card';

interface Props {
    answers: Answer[];
}

function AnswerList({answers}: Props) {

    // placeholder styles
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