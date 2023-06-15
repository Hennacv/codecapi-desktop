import { Trick } from 'renderer/utils/types';
import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';
import { TrickCardContainer, TrickCardContent, TrickCardHeader, TrickCardHeaderInfo, TrickCardTitle } from './trick-card-styles.css';

interface TrickCardProps {
  trick: Trick
  refetch: () => void;
}

const TrickCard = ({
  trick,
  refetch,
}: TrickCardProps) => {

  return (
    <div className={TrickCardContainer}>
      <div className={TrickCardHeader}>
        <div className={TrickCardHeaderInfo}>
          {trick.user.name}
          <span>-</span>
          {dayjs(trick.createdAt).fromNow()}
        </div>
        <VoteList
          votes={trick.votes}
          trickId={trick.id}
          refetch={refetch}
        />
      </div>
      <div className={TrickCardContent}>
        <span className={TrickCardTitle}>{trick.title}</span>
        <DynamicBlocksRead blocks={trick.blocks} />
      </div>
    </div>
  );
};
export default TrickCard;
