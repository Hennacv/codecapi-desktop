import { Answer } from 'renderer/utils/types';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useGetUser } from 'renderer/hooks/use-get-user';
import {
  AnswerCardContainer,
  AnswerCardHeader,
  AnswerCardHeaderInfo,
} from './answer-card-styling.css';

import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';

interface AnswerCardProps {
  answer: Answer;
}

const AnswerCard = ({ answer }: AnswerCardProps) => {
  const { user } = useUserContext();
  const { data: fetchedUser } = useGetUser(user!.uid);
  if (!user && !fetchedUser) {
    return null;
  }
  if (fetchedUser) {
    return (
      <div className={AnswerCardContainer}>
        <div className={AnswerCardHeader}>
          <div className={AnswerCardHeaderInfo}>
            {answer.user.name}
            <span>-</span>
            {dayjs(answer.createdAt).fromNow()}
          </div>
          <VoteList votes={answer.votes} />
        </div>
        {answer.blocks && <DynamicBlocksRead blocks={answer.blocks} />}
      </div>
    );
  }
};

export default AnswerCard;
