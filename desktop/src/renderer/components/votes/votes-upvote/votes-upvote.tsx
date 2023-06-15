import Button from 'renderer/components/ui/button/button';
import IconUpvote from 'assets/icons/icon-upvote';
import { Vote } from 'renderer/utils/types';
import { useEffect, useState } from 'react';
import {
  VotesUpvoteBarCount,
  VotesUpvoteContainer,
} from './votes-upvote-styles.css';
import { useAddVote } from 'renderer/hooks/use-add-vote';
import { useDeleteVote } from 'renderer/hooks/use-delete-vote';

interface VotesUpvoteProps {
  upvotes: Vote[];
  userId: number;
  questionId?: number;
  answerId?: number;
  trickId?: number;
  refetchVotes: () => void;
}

const VotesUpvote = ({
  upvotes,
  userId,
  questionId,
  answerId,
  trickId,
  refetchVotes,
}: VotesUpvoteProps) => {
  const [isActive, setIsActive] = useState(false);

  const addVote = useAddVote({
    onSuccess: () => refetchVotes(),
  });

  const deleteVote = useDeleteVote({
    onSuccess: () => refetchVotes(),
  });

  useEffect(() => {
    updateIsActive();
  }, [upvotes]);

  const handleUpvote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (upvotes.some((upvote) => upvote.userId === userId)) {
      const votetoDelete = upvotes.find((upvote) => upvote.userId === userId);
      if (votetoDelete) {
        deleteVote.mutate(votetoDelete.id);
      }
    } else {
      addVote.mutate({
        type: 'upvote',
        userId: userId,
        questionId: questionId,
        answerId: answerId,
        trickId: trickId,
      });
    }
  };

  const updateIsActive = () => {
    if (upvotes.some((upvote) => upvote.userId === userId)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className={VotesUpvoteContainer}>
      <Button
        type="button"
        variant="vote"
        onClick={(event) => handleUpvote(event)}
      >
        <IconUpvote variant="base" isActive={isActive} />
        <span
          className={
            isActive ? VotesUpvoteBarCount.active : VotesUpvoteBarCount.default
          }
        >
          {upvotes.length}
        </span>
      </Button>
    </div>
  );
};

export default VotesUpvote;
