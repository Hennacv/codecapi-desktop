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
          <p className="mt-4">{question.text}</p>
        )}
      </div>
      <div className={`flex flex-row bg-gray-100 py-4 px-6 rounded-b-xl  ${
        !showText
          ? 'group-hover:bg-gray-200'
          : ''
      }`}>
        {question.tags.map((tag) => (
          <div key={tag.id} className="mr-4 px-3 py-2 bg-green-400 rounded-xl text-xs font-semibold text-white w-fit shadow-tag">
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuestionCard;
