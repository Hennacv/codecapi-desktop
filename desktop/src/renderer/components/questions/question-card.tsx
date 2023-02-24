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
    <div className={`group bg-white shadow-cards border border-gray-100 rounded-xl ${
      !showText
        ? 'hover:bg-gray-100 cursor-pointer'
        : ''
    }`}
    onClick={() => onPressCard(question)}>
      <div className="flex flex-row h-10 w-auto mx-6 my-4 items-center justify-between">
        <h1 className="text-base">{question.user.name}</h1>
        <span className="text-xs text-gray-400 justify-self-end">{dayjs(question.createdAt).fromNow()}</span>
      </div>
      <div className="px-6 pb-6">
        <h1 className="is-6 text-lg font-semibold">{question.title}</h1>
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
