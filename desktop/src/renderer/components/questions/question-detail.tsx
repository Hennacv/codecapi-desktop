import { useNavigate, useParams } from 'react-router-dom';
import { useGetQuestion } from 'renderer/hooks/use-get-question';
import QuestionCard from './question-card';
import AnswerList from '../answers/answer-list';
import NewAnswer from '../answers/new-answer';

function QuestionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question } = useGetQuestion(+id!);
  if (!question) {
    return null;
  }

  return (
    <div>
      <button className="" onClick={() => navigate('/questions')} type="button">
        Terug
      </button>

      <QuestionCard question={question} showText />

      <AnswerList answers={question.answer} />

      <NewAnswer id={question.id} />
    </div>
  );
}

export default QuestionDetail;
