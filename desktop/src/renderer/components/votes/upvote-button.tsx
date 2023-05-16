
import Button from '../ui/button/button';
import IconUpvote from 'assets/icons/icon-upvote';
import { UpvoteButtonContainer, VoteBarCount } from './upvote-button-styles.css';
import { Vote } from 'renderer/utils/types';
import { useEditVote } from 'renderer/hooks/use-edit-vote';

interface UpvoteButtonProps {
  vote: Vote;
  userId: number;
  questionId?: number;
  answerId?: number;
}

const UpvoteButton = ( { vote, userId, questionId, answerId }: UpvoteButtonProps) => {
  const isActive = vote.users.some((voteUser) => voteUser.id === userId);  
  const editVote = useEditVote({
    voteId: vote.id,
    userId: userId,
    onSuccess: () => null,
  });

  const handleUpvote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();   

    editVote.mutate({
      type: 'upvote',
      users: vote.users,
      questionId: questionId,
      answerId: answerId,
    })
  };

  return (
    <div className={UpvoteButtonContainer}>
      <Button type="button" variant="vote" onClick={(event) => handleUpvote(event)}>
        <IconUpvote variant='base' isActive={isActive}/>
        <span className={isActive ? VoteBarCount.active : VoteBarCount.default }>{vote.users.length}</span> 
      </Button>
    </div>
  );
};

export default UpvoteButton;
