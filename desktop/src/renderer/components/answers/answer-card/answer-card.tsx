import { Answer } from 'renderer/utils/types';
import {
  AnswerCardContainer,
  AnswerCardHeader,
  AnswerCardHeaderInfo,
} from './answer-card-styling.css';

import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';

interface AnswerCardProps {
  answer: Answer;
  refetch: () => void;
}

const AnswerCard = ({ answer, refetch }: AnswerCardProps) => {
  return (
    <div className={AnswerCardContainer}>
      <div className={AnswerCardHeader}>
        <div className={AnswerCardHeaderInfo}>
          {answer.user.name}
          <span>-</span>
          {dayjs(answer.createdAt).fromNow()}
        </div>
        <VoteList votes={answer.votes} answerId={answer.id} refetch={refetch} />
      </div>
      {answer.blocks && <DynamicBlocksRead blocks={answer.blocks} />}
    </div>
  );
};

export default AnswerCard;
