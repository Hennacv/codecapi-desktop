import { useNavigate } from 'react-router-dom';
import { Question } from 'renderer/utils/types';

import dayjs from 'renderer/utils/dayjs';

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
    <div onClick={() => onPressCard(question)}>
      <span>{question.user.name}</span>
      {question.tags.map((tag) => (
        <div key={tag.id}>
          {tag.title}
        </div>
      ))}
      <span>{dayjs(question.createdAt).fromNow()}</span>
      <p>{question.title}</p>
        {showText && (
          <p>{question.text}</p>
        )}
    </div>
  );
}
export default QuestionCard;
