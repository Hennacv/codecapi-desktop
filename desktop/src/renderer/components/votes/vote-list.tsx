import { useUserContext } from 'renderer/hooks/use-user-context';
import { Vote } from 'renderer/utils/types';

import VotesUpvote from './votes-upvote/votes-upvote';

interface VoteListProps {
  votes: Vote[];
  questionId?: number;
  answerId?: number;
  refetch: () => void;
}

const VoteList = ({ votes, questionId, answerId, refetch }: VoteListProps) => {
  const { user } = useUserContext();
  const upvotes = votes.filter((vote) => vote.type === 'upvote');

  const refetchVotes = () => {
    refetch();
  };

  return (
    <VotesUpvote
      upvotes={upvotes}
      userId={user.id}
      questionId={questionId}
      answerId={answerId}
      refetchVotes={refetchVotes}
    />
  );
};

export default VoteList;
