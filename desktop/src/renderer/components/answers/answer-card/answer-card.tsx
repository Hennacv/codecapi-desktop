import {
  AnswerCardContainer,
  AnswerCardHeader,
  AnswerCardHeaderInfo,
  AnswerContainer,
  AnswerCardButtonContainer,
} from './answer-card-styling.css';
import { Answer } from 'renderer/utils/types';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useDeleteAnswer } from 'renderer/hooks/use-delete-answer';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import { useTranslation } from 'react-i18next';

import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';
import CommentList from 'renderer/components/comments/comment-list/comment-list';
import AnswerAccept from '../answer-accepted/answer-accepted';
import Button from 'renderer/components/ui/button/button';
import IconDelete from 'assets/icons/icon-delete';

interface AnswerCardProps {
  answer: Answer;
  refetch: () => void;
  questionUserId: number;
  acceptedAnswer: Answer | undefined;
}

const AnswerCard = ({
  answer,
  refetch,
  questionUserId,
  acceptedAnswer,
}: AnswerCardProps) => {
  const {t} = useTranslation();
  const { user } = useUserContext();

  const deleteAnswer = useDeleteAnswer({
    onSuccess: () => {
      toastSuccess(t('toast.success.answer.delete'));
      refetch();
    }
  });

  const handleDeleteAnswer = () => {
    deleteAnswer.mutate(answer.id);
  };

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
            {user.id === questionUserId && (
              <AnswerAccept
                answer={answer}
                refetch={refetch}
                acceptedAnswer={acceptedAnswer}
              />
            )}
            <VoteList
              votes={answer.votes}
              answerId={answer.id}
              refetch={refetch}
            />
            {user.id === answer.user.id && (
              <Button
                type="button"
                variant="voteSquare"
                onClick={handleDeleteAnswer}
              >
                <IconDelete variant="small" />
              </Button>
            )}
          </div>
        </div>
        {!!answer.blocks.length && <DynamicBlocksRead blocks={answer.blocks} />}
      </div>
      <CommentList
        comments={answer.comments}
        id={answer.id}
        type='answer'
        refetch={refetch}
      />
    </div>
  );
};

export default AnswerCard;
