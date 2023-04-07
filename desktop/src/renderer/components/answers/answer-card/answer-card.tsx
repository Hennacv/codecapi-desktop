import { Answer } from 'renderer/utils/types';
import {
  AnswerCardContainer,
  AnswerCardContent,
  AnswerCardHeader,
} from './answer-card-styling.css';

import dayjs from 'renderer/utils/dayjs';

interface AnswerCardProps {
  answer: Answer;
}

const AnswerCard = ({ answer }: AnswerCardProps) => {
  return (
    <div className={AnswerCardContainer}>
      <div className={AnswerCardHeader}>
        {answer.user.name}
        <span>-</span>
        {dayjs(answer.createdAt).fromNow()}
      </div>
    </div>
  );
};

export default AnswerCard;
