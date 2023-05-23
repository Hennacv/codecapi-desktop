import { Comment } from 'renderer/utils/types';
import { useDeleteComment } from 'renderer/hooks/use-delete-comment';
import {
  CommentCardCommentDate,
  CommentCardCommentInfo,
  CommentCardContainer,
  CommentCardDelete,
  CommentCardUser,
  CommentCardValue,
} from './comment-card-styles.css';

import dayjs from 'dayjs';
import Button from 'renderer/components/ui/button/button';
import IconDelete from 'assets/icons/icon-delete';
import classNames from 'classnames';

interface CommentCardProps {
  comment: Comment;
  userUid: string | undefined;
  refetch: () => void;
  drawLine?: () => void;
}

const CommentCard = ({ comment, userUid, refetch }: CommentCardProps) => {
  const deleteComment = useDeleteComment({
    onSuccess: () => refetch(),
  });

  const handleDeleteComment = () => {
    deleteComment.mutate(comment.id);
  };

  return (
    <div
      className={classNames(CommentCardContainer.default, {
        [CommentCardContainer.defaultHover]: comment.user.uid === userUid,
      })}
    >
      <div className={CommentCardUser}>
        {comment.user.name.substring(0, 1).toUpperCase()}
      </div>
      <div className={CommentCardCommentInfo}>
        <span>{comment.user.name}</span>
        <span>-</span>
        <div className={CommentCardCommentDate}>
          <span>{dayjs(comment.createdAt).fromNow()}</span>
          <span>-</span>
        </div>
      </div>
      <div className={CommentCardValue}>
        <p>{comment.comment}</p>
      </div>
      {comment.user.uid === userUid ? (
        <div className={CommentCardDelete}>
          <Button type="button" variant="comment" onClick={handleDeleteComment}>
            <IconDelete variant="small" />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CommentCard;
