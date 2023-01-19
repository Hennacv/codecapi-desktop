import { useNavigate, useParams } from 'react-router-dom';
import { useGetQuestion } from 'renderer/hooks/use-get-question';
import QuestionCard from './question-card';

function QuestionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question } = useGetQuestion(+id!);
  if (!question) {
    return null;
  }

  return (
    <div>
      <button className="button mb-5" onClick={() => navigate('/questions')}>
        Terug
      </button>

      <QuestionCard question={question} showText />
    </div>
  );
}

export default QuestionDetail;
