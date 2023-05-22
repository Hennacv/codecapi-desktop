import { Comment } from 'renderer/utils/types';
import { CommentCardContainer, CommentCardLineVariants, CommentCardUserContainer, CommentCardValue } from './comment-card-styles.css';
import dayjs from 'dayjs';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  
  return (
    <div className={CommentCardContainer}>
      <div className={CommentCardUserContainer}>
        {comment.user.name.substring(0, 1).toUpperCase()}
        <span className={CommentCardLineVariants.CommentLineTop}></span>
        <span className={CommentCardLineVariants.CommentLineBottom}></span>
      </div>
      <span>{comment.user.name}</span>
      <span>-</span>
      <span>{dayjs(comment.createdAt).fromNow()}</span>
      <span>-</span>
      <div className={CommentCardValue}>
        <p>{comment.comment}</p>
      </div>
    </div>
  )
}

export default CommentCard;