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
  TrickContainer,
} from './trick-card-styles.css';
import { useUserContext } from 'renderer/hooks/use-user-context';
import Button from 'renderer/components/ui/button/button';
import IconEdit from 'assets/icons/icon-edit';
import IconDelete from 'assets/icons/icon-delete';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TrickDelete from '../trick-delete/trick-delete';
import CommentList from 'renderer/components/comments/comment-list/comment-list';

interface TrickCardProps {
  trick: Trick;
  refetch: () => void;
}

const TrickCard = ({ trick, refetch }: TrickCardProps) => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={TrickContainer}>
      <div className={TrickCardContainer}>
        <div className={TrickCardHeader}>
          <div className={TrickCardHeaderInfo}>
            {trick.user.name}
            <span>-</span>
            {dayjs(trick.createdAt).fromNow()}
          </div>
          <div className={TrickCardButtonsContainer}>
            <VoteList
              votes={trick.votes}
              trickId={trick.id}
              refetch={refetch}
            />
            {trick.user.uid === user.uid && (
              <>
                <Button
                  type="button"
                  variant="extraSmallSquare"
                  onClick={() => navigate(`/tricks/edit/${trick.id}`)}
                >
                  <IconEdit variant="small" />
                </Button>
                <Button
                  type="button"
                  variant="extraSmallSquareDelete"
                  onClick={() => setIsShown(true)}
                >
                  <IconDelete variant="small" />
                </Button>
                <TrickDelete
                  id={trick.id.toString()}
                  isShown={isShown}
                  onClose={() => setIsShown(false)}
                  refetch={refetch}
                />
              </>
            )}
          </div>
        </div>
        <div className={TrickCardContent}>
          <span className={TrickCardTitle}>{trick.title}</span>
          <DynamicBlocksRead blocks={trick.blocks} />
        </div>
      </div>
      <CommentList
          comments={trick.comments}
          id={trick.id}
          type="trick"
          refetch={refetch}
        />
    </div>
  );
};
export default TrickCard;
