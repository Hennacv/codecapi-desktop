import { Comment } from 'renderer/utils/types';
import { useEffect, useRef, useState } from 'react';
import { useAddComment } from 'renderer/hooks/use-add-comment';
import { useGetUser } from 'renderer/hooks/use-get-user';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useTranslation } from 'react-i18next';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import {
  CommentListContainer,
  CommentListItem,
  CommentListLine,
  CommentListNewVariants,
} from './comment-list-styles.css';

import Button from 'renderer/components/ui/button/button';
import CommentCard from '../comment-card/comment-card';
import IconAdd from 'assets/icons/icon-add';
import InputText from 'renderer/components/ui/input-text/input-text';
import IconRemove from 'assets/icons/icon-remove';
import classNames from 'classnames';

interface CommentListProps {
  comments: Comment[];
  answerId: number;
  refetch: () => void;
}

const CommentList = ({ comments, answerId, refetch }: CommentListProps) => {
  const {t} = useTranslation();
  
  const [newCommentActive, setNewCommentActive] = useState<boolean>(false);
  const [newCommentValue, setNewCommentValue] = useState<string>('');

  const { user } = useUserContext();
  const { data: fetchedUser } = useGetUser(user!.uid);

  const [lineHeight, setLineHeigt] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const lineRef = useRef<HTMLCanvasElement>(null);

  const addComment = useAddComment({
    onSuccess: () => {
      refetch();
      toastSuccess(t('toast.success.comment.add'));
      setNewCommentActive(false);
      setNewCommentValue('');
    },
  });

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      const observer = new ResizeObserver((entries) => {
        const newHeight = entries[0].contentRect.height;
        setLineHeigt(newHeight);
      });
      observer.observe(list);
      return () => {
        observer.unobserve(list);
      };
    }
  }, [listRef, comments]);

  const handleNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fetchedUser && !!newCommentValue) {
      addComment.mutate({
        comment: newCommentValue,
        userId: fetchedUser.id,
        answerId: answerId,
      });
    }
  };

  return (
    <>
      {!!comments.length && (
        <ul className={CommentListContainer} ref={listRef}>
          {comments.sort((a, b) => a.id - b.id).map((comment, index) => (
            <li key={index} className={CommentListItem}>
              <CommentCard
                comment={comment}
                userUid={user?.uid}
                refetch={refetch}
              />
            </li>
          ))}
          <span
            className={CommentListLine}
            ref={lineRef}
            style={{
              height: lineHeight !== null ? `${lineHeight + 32}px` : '0',
            }}
          ></span>
        </ul>
      )}
      {!newCommentActive ? (
        <div
          className={classNames(CommentListNewVariants.default, {
            [CommentListNewVariants.withComments]: comments.length > 0,
          })}
        >
          <Button
            type="button"
            variant="comment"
            onClick={() => setNewCommentActive(true)}
          >
            <IconAdd variant="small" />
          </Button>
          <p>{t('comment.new.button.open')}</p>
          {comments.length === 0 && (
            <span
              className={CommentListLine}
              style={{ height: '1rem' }}
            ></span>
          )}
        </div>
      ) : (
        <form
          onSubmit={handleNewComment}
          className={classNames(CommentListNewVariants.default, {
            [CommentListNewVariants.withComments]: comments.length > 0,
          })}
        >
          <Button
            type="button"
            variant="comment"
            onClick={() => setNewCommentActive(false)}
          >
            <IconRemove variant="small" />
          </Button>
          <Button type="submit" variant="comment" disabled={!newCommentValue}>
            <IconAdd variant="small" />
          </Button>
          <InputText
            type="text"
            value={newCommentValue}
            id="newCommentInput"
            placeholder={t('comment.new.input.placeholder')}
            variant="inline"
            onChange={(event) => setNewCommentValue(event.target.value)}
          />
          {comments.length === 0 && (
            <span
              className={CommentListLine}
              style={{ height: '1rem' }}
            ></span>
          )}
        </form>
      )}
    </>
  );
};

export default CommentList;
