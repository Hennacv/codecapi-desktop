import { Answer } from 'renderer/utils/types';
import { AnswerListContainer } from './answer-list-styling.css';
import AnswerCard from '../answer-card/answer-card';
interface AnswerListProps {
  answers: Answer[];
  refetch: () => void;
}

const AnswerList = ({ answers, refetch }: AnswerListProps) => {
  return (
    <div className={AnswerListContainer}>
      {answers.map((answer: Answer) => (
        <AnswerCard key={answer.id} answer={answer} refetch={refetch} />
      ))}
    </div>
  );
};

export default AnswerList;
