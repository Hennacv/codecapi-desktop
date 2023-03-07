import { useNavigate } from 'react-router-dom';
import dayjs from 'renderer/utils/dayjs';
import { Question } from 'renderer/utils/types';

interface QuestionCardProps {
  question: Question;
  showText?: boolean;
}

function QuestionCard({ question, showText = false }: QuestionCardProps) {
  const navigate = useNavigate();

  function onPressCard(question: Question) {
    navigate(`/questions/${question.id}`);
  }

  return (
    <div className="" onClick={() => onPressCard(question)}>
      <div className="">
        <div className="">
          <div>
            <span className="">{question.user.name}</span>

            {question.tags.map((tag) => (
              <div key={tag.id} className="">
                {tag.title}
              </div>
            ))}
          </div>

          <span className="">{dayjs(question.createdAt).fromNow()}</span>
        </div>

        <p className="">{question.title}</p>

        {showText && (
          <div>
            <hr />
            <p>{question.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
