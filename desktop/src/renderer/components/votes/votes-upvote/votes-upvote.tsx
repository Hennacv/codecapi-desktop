import Button from 'renderer/components/ui/button/button';
import IconUpvote from 'assets/icons/icon-upvote';
import { Vote } from 'renderer/utils/types';
import { useEditVote } from 'renderer/hooks/use-edit-vote';
import { useEffect, useState } from 'react';
import { VotesUpvoteBarCount, VotesUpvoteContainer } from './votes-upvote-styles.css';

interface VotesUpvoteProps {
  vote: Vote;
  userId: number;
  questionId?: number;
  answerId?: number;
}

const VotesUpvote = ({
  vote,
  userId,
  questionId,
  answerId,
}: VotesUpvoteProps) => {
  const [isActive, setIsActive] = useState(false);
  const editVote = useEditVote({
    voteId: vote.id,
    userId: userId,
    onSuccess: () => updateIsActive(),
  });

  useEffect(() => {
    updateIsActive();
  }, [vote]);

  const handleUpvote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    editVote.mutate({
      type: 'upvote',
      users: vote.users,
      questionId: questionId,
      answerId: answerId,
    });
  };

  const updateIsActive = () => {
    if (vote.users.some((voteUser) => voteUser.id === userId)) {
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
        <span className={isActive ? VotesUpvoteBarCount.active : VotesUpvoteBarCount.default}>
          {vote.users.length}
        </span>
      </Button>
    </div>
  );
};

export default VotesUpvote;
