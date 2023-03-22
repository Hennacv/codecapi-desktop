import { useNavigate } from 'react-router-dom';
import { Question } from 'renderer/utils/types';
import { 
  QuestionCardHeader,
  QuestionCardIcon,
  QuestionCardContent, 
  QuestionCardVariants,
  QuestionCardIconContainer,
  QuestionCardParagraph,
  QuestionCardTitle
} from './question-card-styles.css';

import dayjs from 'renderer/utils/dayjs';
import classNames from 'classnames';
import TagCard from 'renderer/components/tags/tag-card/tag-card';
import IconQuestions from 'assets/icons/icon-questions.svg';

interface QuestionCardProps {
  question: Question;
  showText?: boolean;
}

const QuestionCard = ({ question, showText = false }: QuestionCardProps) => {

  const navigate = useNavigate();

  function onPressCard(question: Question) {
    navigate(`/questions/${question.id}`);
  }

  return (
    <div className={classNames(QuestionCardVariants.default, {[QuestionCardVariants.defaultHover]: !showText,})} 
      onClick={() => onPressCard(question)}>
      <div className={QuestionCardHeader}>
        {question.user.name} 
        <span>-</span>
        {dayjs(question.createdAt).fromNow()}
        {!showText &&
          <>
            <span>-</span>
            <div className={QuestionCardIconContainer}>
              <img className={QuestionCardIcon} src={IconQuestions} />
              {question.answer.length}
            </div>
          </>
        }
        {!!question.tags.length &&
          <>
            <span>-</span>
            {question.tags.map((tag) => (
              <TagCard key={tag.id} title={tag.title} color={tag.color} variant="small" />
            ))}
          </>
        }
      </div>
      <div className={QuestionCardContent}>
        <span className={QuestionCardTitle}>{question.title}</span>
        {showText && (
          <p className={QuestionCardParagraph}>{question.text}</p>
        )}
      </div>
    </div>
  );
}
export default QuestionCard;
