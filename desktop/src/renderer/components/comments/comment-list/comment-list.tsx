import Button from 'renderer/components/ui/button/button';
import CommentCard from '../comment-card/comment-card';
import { CommentListContainer, CommentListNewContainer } from './comment-list-styles.css';
import { Comment } from 'renderer/utils/types';
import IconAdd from 'assets/icons/icon-add';

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <>
      <ul className={CommentListContainer}>
        {comments.map((comment, index) => (
          <li key={index}>
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
      <div className={CommentListNewContainer}>
        <Button
          type="button"
          variant="comment"
          onClick={() => console.log('test')}
        >
          <IconAdd variant="small" />
        </Button>
        <p>New comment</p>
      </div>
    </>
  );
};

export default CommentList;
