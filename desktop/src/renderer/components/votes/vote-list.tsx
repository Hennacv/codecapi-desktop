import { useGetUser } from 'renderer/hooks/use-get-user';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { Vote } from 'renderer/utils/types';
import VotesUpvote from './votes-upvote/votes-upvote';

interface VoteListProps {
  votes: Vote[];
  questionId?: number;
  answerId?: number;
}

const VoteList = ({ votes, questionId, answerId }: VoteListProps) => {
  const { user } = useUserContext();
  const { data: fetchedUser } = useGetUser(user!.uid);

  if (!user && !fetchedUser) {
    return null;
  }

  const RenderVotes = (): JSX.Element | null => {
    let componentToRender: JSX.Element | null = null;
    if (fetchedUser) {
      votes.map((vote, index) => {
        if (vote.type === 'upvote') {
          componentToRender = (
            <VotesUpvote
              key={index}
              vote={vote}
              userId={fetchedUser.id}
              questionId={questionId}
              answerId={answerId}
            />
          );
        } else {
          componentToRender = null;
        }
      });
    }
    return componentToRender;
  };

  return <RenderVotes />;
};

export default VoteList;
