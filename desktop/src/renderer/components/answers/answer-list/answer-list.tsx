import { Answer } from 'renderer/utils/types';
import AnswerCard from '../answer-card/answer-card';
import { AnswerListContainer } from './answer-list-styling.css';

interface AnswerListProps {
  answers: Answer[];
}

const AnswerList = ({ answers }: AnswerListProps) => {
  return (
    <div className={AnswerListContainer}>
      {answers.map((answer: Answer) => (
        <AnswerCard key={answer.id} answer={answer} />
      ))}
    </div>
  );
};

export default AnswerList;
