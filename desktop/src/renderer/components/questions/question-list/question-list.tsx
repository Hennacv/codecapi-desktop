import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question } from 'renderer/utils/types';
import QuestionCard from '../question-card/question-card';

const QuestionList = () => {
  const { data: questions = [] } = useGetQuestions();

  return (
    <div>
      {questions.map((question: Question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
