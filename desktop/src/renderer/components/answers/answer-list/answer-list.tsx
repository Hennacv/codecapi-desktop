import { Answer } from 'renderer/utils/types';
import { AnswerListContainer } from './answer-list-styling.css';
import AnswerCard from '../answer-card/answer-card';
interface AnswerListProps {
  answers: Answer[];
  refetch: () => void;
  userId: number;
  acceptedCheck: () => void;
  acceptedAnswer: boolean;
}

const AnswerList = ({
  answers,
  refetch,
  userId,
  acceptedCheck,
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
            userId={userId}
            acceptedCheck={acceptedCheck}
            acceptedAnswer={acceptedAnswer}
          />
        ))}
    </div>
  );
};

export default AnswerList;
