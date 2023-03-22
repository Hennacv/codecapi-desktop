import { Answer } from 'renderer/utils/types';
import AnswerCard from './answer-card';

interface AnswerListProps {
    answers: Answer[];
}

const AnswerList = ({answers}: AnswerListProps) => {
	return (
		<div>
			{answers.map((answer: Answer) => (
					<AnswerCard key={answer.id} answer={answer}/>
			))}
		</div>
	);
} 

export default AnswerList;