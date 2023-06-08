import { useNavigate } from 'react-router-dom';
import { Question } from 'renderer/utils/types';
import {
  QuestionCardHeader,
  QuestionCardContent,
  QuestionCardVariants,
  QuestionCardIconContainer,
  QuestionCardTitle,
  QuestionCardHeaderInfo,
  QuestionSolvedContainer,
  QuestionSolvedTag,
} from './question-card-styles.css';

import dayjs from 'renderer/utils/dayjs';
import classNames from 'classnames';
import TagCard from 'renderer/components/tags/tag-card/tag-card';
import IconQuestions from 'assets/icons/icon-questions';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import VoteList from 'renderer/components/votes/vote-list';
import { useTranslation } from 'react-i18next';
import IconCheckmark from 'assets/icons/icon-checkmark';

interface QuestionCardProps {
  question: Question;
  showText?: boolean;
  refetch: () => void;
}

const QuestionCard = ({
  question,
  showText = false,
  refetch,
}: QuestionCardProps) => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  function onPressCard(question: Question) {
    navigate(`/questions/${question.id}`);
  }

  console.log(question)
  return (
    <div
      className={classNames(QuestionCardVariants.default, {
        [QuestionCardVariants.defaultHover]: !showText,
      })}
      onClick={() => onPressCard(question)}
    >
      <div className={QuestionCardHeader}>
        <div className={QuestionCardHeaderInfo}>
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
          {question?.answer.find(answer => answer.accepted) && (
          <div className={QuestionSolvedContainer}>
            <span>-</span>
            <div className={QuestionSolvedTag}>
              <IconCheckmark isSolved variant='extraSmall'/>
              {t('common.solved')}
            </div>
          </div>
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
        <VoteList
          votes={question.votes}
          questionId={question.id}
          refetch={refetch}
        />
      </div>
      <div className={QuestionCardContent}>
        <span className={QuestionCardTitle}>{question.title}</span>
        {showText && <DynamicBlocksRead blocks={question.blocks} />}
      </div>
    </div>
  );
};
export default QuestionCard;
