import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question } from 'renderer/utils/types';
import QuestionCard from './question-card';

function Home() {
  const { data: questions = [] } = useGetQuestions();

  return (
    <div>
      <div className="flex flex-col gap-y-4">
        {questions.map((q: Question) => (
            <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}

export default Home;
