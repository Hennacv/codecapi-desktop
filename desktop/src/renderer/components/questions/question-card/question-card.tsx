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
    <div className={showText ? QuestionCardVariants.default : QuestionCardVariants.defaultHover} onClick={() => onPressCard(question)}>
      <div className={QuestionCardHeader}>
        {question.user.name}<span>-</span>
        {dayjs(question.createdAt).fromNow()}
        {!showText ?
          <div className={QuestionCardIconContainer}>
            <span>-</span>
            <img className={QuestionCardIcon} src={IconQuestions} />
            {question.answer.length}
          </div>
        :
          null
        }
        {question.tags.length ?
          <>
            <span>-</span>
            {question.tags.map((tag) => (
              <TagCard key={tag.id} title={tag.title} color={tag.color} variant="small" />
            ))}
          </>
        :
          null
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
