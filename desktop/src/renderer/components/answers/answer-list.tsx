import { Answer } from 'renderer/utils/types';
import AnswerCard from './answer-card';

interface AnswerListProps {
    answers: Answer[];
}

const AnswerList = ({answers}: AnswerListProps) => {
	return (
		<div>
			<h1>{ answers.length } antwoorden</h1>
			{answers.map((answer: Answer) => (
					<AnswerCard key={answer.id} answer={answer}/>
			))}
		</div>
	);
} 

export default AnswerList;