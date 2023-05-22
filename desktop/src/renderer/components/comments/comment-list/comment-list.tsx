import Button from 'renderer/components/ui/button/button';
import CommentCard from '../comment-card/comment-card';
import {
  CommentListContainer,
  CommentListNewContainer,
} from './comment-list-styles.css';
import { Comment } from 'renderer/utils/types';
import IconAdd from 'assets/icons/icon-add';
import InputText from 'renderer/components/ui/input-text/input-text';
import { useState } from 'react';
import IconRemove from 'assets/icons/icon-remove';
import { useAddComment } from 'renderer/hooks/use-add-comment';

interface CommentListProps {
  comments: Comment[];
  answerId: number;
}

const CommentList = ({ comments, answerId }: CommentListProps) => {
  const [newCommentActive, setNewCommentActive] = useState<boolean>(false);
  const [newCommentValue, setNewCommentValue] = useState<string>('');
  const addComment = useAddComment({
    onSuccess: () => null,
  });

  const handleNewComment = () => {
    addComment.mutate({
      comment: newCommentValue,
      userId: 0,
      answerId: answerId,
    });
  };

  return (
    <>
      {comments.length > 0 ? (
        <ul className={CommentListContainer}>
          {comments.map((comment, index) => (
            <li key={index}>
              <CommentCard comment={comment} />
            </li>
          ))}
        </ul>
      ) : null}
      <div className={CommentListNewContainer}>
        {!newCommentActive ? (
          <>
            <Button
              type="button"
              variant="comment"
              onClick={() => setNewCommentActive(true)}
            >
              <IconAdd variant="small" />
            </Button>
            <p>New comment</p>
          </>
        ) : (
          <>
            <Button
              type="button"
              variant="comment"
              onClick={() => setNewCommentActive(false)}
            >
              <IconRemove variant="small" />
            </Button>
            <Button
              type="button"
              variant="comment"
              onClick={handleNewComment}
            >
              <IconAdd variant="small" />
            </Button>
            <InputText
              type="text"
              value={newCommentValue}
              id="newCommentInput"
              defaultValue=""
              placeholder="Write youre comment here"
              variant="inline"
              onChange={(event) => setNewCommentValue(event.target.value)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default CommentList;
