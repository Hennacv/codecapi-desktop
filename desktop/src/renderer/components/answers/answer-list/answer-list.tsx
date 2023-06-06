import { Answer } from 'renderer/utils/types';
import { AnswerListContainer } from './answer-list-styling.css';
import AnswerCard from '../answer-card/answer-card';
interface AnswerListProps {
  answers: Answer[];
  refetch: () => void;
  QuestionUserId: number;
  acceptedAnswer: Answer|undefined;
}

const AnswerList = ({
  answers,
  refetch,
  QuestionUserId,
  acceptedAnswer,
}: AnswerListProps) => {
  return (
    <div className={AnswerListContainer}>
      {answers
        .sort((a, b) =>
          a.accepted === b.accepted ? 0 : a.accepted === true ? -1 : 1
        )
        .map((answer: Answer) => (
          <AnswerCard
            key={answer.id}
            answer={answer}
            refetch={refetch}
            QuestionUserId={QuestionUserId}
            acceptedAnswer={acceptedAnswer}
          />
        ))}
    </div>
  );
};

export default AnswerList;
