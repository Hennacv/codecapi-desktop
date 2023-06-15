import { useUserContext } from 'renderer/hooks/use-user-context';
import { Vote } from 'renderer/utils/types';

import VotesUpvote from './votes-upvote/votes-upvote';

interface VoteListProps {
  votes: Vote[];
  questionId?: number;
  answerId?: number;
  trickId?: number;
  refetch: () => void;
}

const VoteList = ({ votes, questionId, answerId, trickId, refetch }: VoteListProps) => {
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
      trickId={trickId}
      refetchVotes={refetchVotes}
    />
  );
};

export default VoteList;
