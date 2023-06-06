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
import { useUserContext } from 'renderer/hooks/use-user-context';

interface AnswerCardProps {
  answer: Answer;
  refetch: () => void;
  QuestionUserId: number;
  acceptedAnswer: Answer | undefined;
}

const AnswerCard = ({
  answer,
  refetch,
  QuestionUserId,
  acceptedAnswer,
}: AnswerCardProps) => {
  const { user } = useUserContext();
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
          {user.id === QuestionUserId &&
            <AnswerAccept
              answer={answer}
              refetch={refetch}
              acceptedAnswer={acceptedAnswer}
            />
          }
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
