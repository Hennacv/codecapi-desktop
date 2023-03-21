import dayjs from 'renderer/utils/dayjs';
import { Answer } from "renderer/utils/types";

interface AnswerCardProps {
  answer: Answer;
}

const AnswerCard = ({ answer }: AnswerCardProps) => { 
	return (
		<div key={answer.id}>
			<div>
				<p>{dayjs(answer.createdAt).fromNow()}</p>
			</div>
			<p>{answer.text}</p>
		</div> 
	)
}

export default AnswerCard;
