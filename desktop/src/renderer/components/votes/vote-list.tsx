import { useGetUser } from 'renderer/hooks/use-get-user';
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
  const { data: fetchedUser } = useGetUser(user!.uid);

  const upvotes = votes.filter((vote) => vote.type === 'upvote');

  if (!user && !fetchedUser) {
    return null;
  }

  const refetchVotes = () => {
    refetch();
  };

  const RenderVotes = (): JSX.Element | null => {
    let componentToRender: JSX.Element | null = null;
    if (fetchedUser) {
      return (
        <VotesUpvote
          upvotes={upvotes}
          userId={fetchedUser.id}
          questionId={questionId}
          answerId={answerId}
          refetchVotes={refetchVotes}
        />
      );
    }
    return componentToRender;
  };

  return <RenderVotes />;
};

export default VoteList;
