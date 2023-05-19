import { CommentListContainer } from "./comment-list-styles.css";
import { Comment } from 'renderer/utils/types';
interface CommentListProps {
  comments: Comment[],
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul className={CommentListContainer}>
      {comments.map((comment, index) => (
        <li key={index}>{comment.comment}</li>
      ))}
    </ul>
  )
}

export default CommentList;