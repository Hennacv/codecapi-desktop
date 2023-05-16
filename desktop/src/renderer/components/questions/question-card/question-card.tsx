import { useNavigate } from 'react-router-dom';
import { Question } from 'renderer/utils/types';
import {
  QuestionCardHeader,
  QuestionCardContent,
  QuestionCardVariants,
  QuestionCardIconContainer,
  QuestionCardTitle,
  QuestionCardWrapper,
  QuestionCardVotes,
} from './question-card-styles.css';

import dayjs from 'renderer/utils/dayjs';
import classNames from 'classnames';
import TagCard from 'renderer/components/tags/tag-card/tag-card';
import IconQuestions from 'assets/icons/icon-questions';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import Upvote from 'renderer/components/votes/upvote-button';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useGetUser } from 'renderer/hooks/use-get-user';

interface QuestionCardProps {
  question: Question;
  showText?: boolean;
}

const QuestionCard = ({ question, showText = false }: QuestionCardProps) => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { data: fetchedUser } = useGetUser(user!.uid);
  const questionVote = question.votes.filter((vote) => vote.type === 'upvote')[0];

  function onPressCard(question: Question) {
    navigate(`/questions/${question.id}`);
  };
  
  if (fetchedUser) {
    return (
      <div className={QuestionCardWrapper}>
        <div
          className={classNames(QuestionCardVariants.default, {
            [QuestionCardVariants.defaultHover]: !showText,
          })}
          onClick={() => onPressCard(question)}
        >
          <div className={QuestionCardHeader}>
            {question.user.name}
            <span>-</span>
            {dayjs(question.createdAt).fromNow()}
            {!showText && (
              <>
                <span>-</span>
                <div className={QuestionCardIconContainer}>
                  <IconQuestions variant="small" />
                  {question.answer.length}
                </div>
              </>
            )}
            {!!question.tags.length && (
              <>
                <span>-</span>
                {question.tags.map((tag) => (
                  <TagCard
                    key={tag.id}
                    title={tag.title}
                    color={tag.color}
                    variant="small"
                  />
                ))}
              </>
            )}
          </div>
          <div className={QuestionCardContent}>
            <span className={QuestionCardTitle}>{question.title}</span>
            {showText && <DynamicBlocksRead blocks={question.blocks} />}
          </div>
        </div>
        <div className={QuestionCardVotes}>
          <Upvote vote={questionVote} userId={fetchedUser.id} questionId={question.id} />
        </div>
      </div>
    );
  }

};
export default QuestionCard;
