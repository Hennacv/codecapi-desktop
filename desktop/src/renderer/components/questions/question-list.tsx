import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question } from 'renderer/utils/types';
import QuestionCard from './question-card';

function Home() {
  const { data: questions = [] } = useGetQuestions();

  return (
    <div>
      <div className="">
        {questions.map((q: Question) => (
          <div key={q.id} className="">
            <QuestionCard question={q} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
