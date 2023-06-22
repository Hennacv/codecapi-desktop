import { Trick } from 'renderer/utils/types';
import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';
import {
  TrickCardButtonsContainer,
  TrickCardContainer,
  TrickCardContent,
  TrickCardHeader,
  TrickCardHeaderInfo,
  TrickCardTitle,
} from './trick-card-styles.css';
import { useUserContext } from 'renderer/hooks/use-user-context';
import Button from 'renderer/components/ui/button/button';
import IconEdit from 'assets/icons/icon-edit';
import IconDelete from 'assets/icons/icon-delete';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TrickDelete from '../trick-delete/trick-delete';

interface TrickCardProps {
  trick: Trick;
  refetch: () => void;
}

const TrickCard = ({ trick, refetch }: TrickCardProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={TrickCardContainer}>
      <div className={TrickCardHeader}>
        <div className={TrickCardHeaderInfo}>
          {trick.user.name}
          <span>-</span>
          {dayjs(trick.createdAt).fromNow()}
        </div>
        {trick.user.uid === user.uid && (
          <div className={TrickCardButtonsContainer}>
            <Button
              type="button"
              variant="smallSquare"
              onClick={() => navigate(`/tricks/edit/${trick.id}`)}
            >
              <IconEdit variant="default" />
            </Button>
            <Button
              type="button"
              variant="smallSquareDelete"
              onClick={() => setIsShown(true)}
            >
              <IconDelete variant="default" />
            </Button>
            <TrickDelete
              id={trick.id.toString()}
              isShown={isShown}
              onClose={() => setIsShown(false)}
              refetch={refetch}
            />
          </div>
        )}
        {/* <VoteList
          votes={trick.votes}
          trickId={trick.id}
          refetch={refetch}
        /> */}
      </div>
      <div className={TrickCardContent}>
        <span className={TrickCardTitle}>{trick.title}</span>
        <DynamicBlocksRead blocks={trick.blocks} />
      </div>
    </div>
  );
};
export default TrickCard;