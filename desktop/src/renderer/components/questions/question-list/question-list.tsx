import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question } from 'renderer/utils/types';
import { Link, useNavigate } from 'react-router-dom';
import QuestionCard from '../question-card/question-card';
import { NewQuestionButtonPosition } from '../new-question/new-question-styles.css';
import Button from 'renderer/components/ui/button/button';

function QuestionList() {
  const { data: questions = [] } = useGetQuestions();
  const navigate = useNavigate();

  function onNewQuestion() {
    navigate(`/questions/new`);
  }

  return (
    <div>
      <div className={NewQuestionButtonPosition}>
        <Button
          text="+ New Question"
          type="button"
          variant="smallSquare"
          onClick={() => onNewQuestion()}
        />
      </div>
      {questions.map((question: Question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
