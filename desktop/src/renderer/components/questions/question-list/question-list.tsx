import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question } from 'renderer/utils/types';
import { Link } from 'react-router-dom';
import { ButtonVariants } from 'renderer/components/ui/button/button-styles.css';
import QuestionCard from '../question-card/question-card';
import { NewQuestionButtonPosition } from '../new-question/new-question-styles.css';

function QuestionList() {
  const { data: questions = [] } = useGetQuestions();

  return (
    <div>
      <div className={NewQuestionButtonPosition}>
        <Link className={ButtonVariants.smallSquare} to="/questions/new">
          + New Question
        </Link>
      </div>
      {questions.map((question: Question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
