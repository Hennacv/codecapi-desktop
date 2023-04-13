import { Answer } from 'renderer/utils/types';
import {
  AnswerCardContainer,
  AnswerCardHeader,
} from './answer-card-styling.css';

import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';

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
      {answer.blocks && <DynamicBlocksRead blocks={answer.blocks} />}
    </div>
  );
};

export default AnswerCard;
