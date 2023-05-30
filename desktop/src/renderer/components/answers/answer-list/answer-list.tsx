import { Answer } from 'renderer/utils/types';
import { AnswerListContainer } from './answer-list-styling.css';
import AnswerCard from '../answer-card/answer-card';
interface AnswerListProps {
  answers: Answer[];
  refetch: () => void;
  userId: number;
}

const AnswerList = ({ answers, refetch, userId }: AnswerListProps) => {
  return (
    <div className={AnswerListContainer}>
      {answers.map((answer: Answer) => (
        <AnswerCard key={answer.id} answer={answer} refetch={refetch} userId={userId}/>
      ))}
    </div>
  );
};

export default AnswerList;
