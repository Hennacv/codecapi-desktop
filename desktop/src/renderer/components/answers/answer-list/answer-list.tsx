import { Answer } from 'renderer/utils/types';
import { AnswerListContainer } from './answer-list-styling.css';
import AnswerCard from '../answer-card/answer-card';
interface AnswerListProps {
  answers: Answer[];
  refetch: () => void;
  questionUserId: number;
  acceptedAnswer: Answer|undefined;
}
const AnswerList = ({
  answers,
  refetch,
  questionUserId,
  acceptedAnswer,
}: AnswerListProps) => {
  return (
    <div className={AnswerListContainer}>
      {answers.sort((a, b) => {
        if (a.accepted && !b.accepted) {
          return -1;
        } else if (!a.accepted && b.accepted) {
          return 1;
        } else {
          return a.id - b.id;
        }
      }).map((answer: Answer) => (
          <AnswerCard
            key={answer.id}
            answer={answer}
            refetch={refetch}
            questionUserId={questionUserId}
            acceptedAnswer={acceptedAnswer}
          />
        ))}
    </div>
  );
};

export default AnswerList;
