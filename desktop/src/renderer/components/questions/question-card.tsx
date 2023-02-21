import { useNavigate } from 'react-router-dom';
import dayjs from 'renderer/utils/dayjs';
import { Question } from 'renderer/utils/types';

interface Props {
  question: Question;
  showText?: boolean;
}

function QuestionCard({ question, showText = false }: Props) {
  const navigate = useNavigate();

  function onPressCard(question: Question) {
    navigate(`/questions/${question.id}`);
  }

  return (
    <div className="card pointer" onClick={() => onPressCard(question)}>
      <div className="card-content">
        <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
          <div>
            <span className="tag is-medium has-text-weight-bold is-dark mr-4">
              {question.user.name}
            </span>

            {question.tags.map((tag) => (
              <div key={tag.id} className="tag is-medium is-link mr-4">
                {tag.title}
              </div>
            ))}
          </div>

          <span className="mr-5">{dayjs(question.createdAt).fromNow()}</span>
        </div>

        <p className="title is-6">{question.title}</p>

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
