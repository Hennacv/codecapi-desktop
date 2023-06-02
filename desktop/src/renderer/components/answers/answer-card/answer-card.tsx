import { Answer } from 'renderer/utils/types';
import {
  AnswerCardContainer,
  AnswerCardHeader,
  AnswerCardHeaderInfo,
  AnswerContainer,
  AnswerCardButtonContainer,
} from './answer-card-styling.css';

import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';
import CommentList from 'renderer/components/comments/comment-list/comment-list';
import AnswerAccept from '../answer-accepted/answer-accepted';

interface AnswerCardProps {
  answer: Answer;
  refetch: () => void;
  userId: number;
  acceptedCheck: () => void;
  acceptedAnswer: boolean;
}

const AnswerCard = ({
  answer,
  refetch,
  userId,
  acceptedCheck,
  acceptedAnswer,
}: AnswerCardProps) => {
  return (
    <div className={AnswerContainer}>
      <div
        className={
          answer.accepted
            ? AnswerCardContainer.active
            : AnswerCardContainer.default
        }
      >
        <div className={AnswerCardHeader}>
          <div className={AnswerCardHeaderInfo}>
            {answer.user.name}
            <span>-</span>
            {dayjs(answer.createdAt).fromNow()}
          </div>
          <div className={AnswerCardButtonContainer}>
            <AnswerAccept
              userId={userId}
              answer={answer}
              refetch={refetch}
              acceptedCheck={acceptedCheck}
              acceptedAnswer={acceptedAnswer}
            />
            <VoteList
              votes={answer.votes}
              answerId={answer.id}
              refetch={refetch}
            />
          </div>
        </div>
        {!!answer.blocks.length && <DynamicBlocksRead blocks={answer.blocks} />}
      </div>
      <CommentList
        comments={answer.comments}
        answerId={answer.id}
        refetch={refetch}
      />
    </div>
  );
};

export default AnswerCard;
