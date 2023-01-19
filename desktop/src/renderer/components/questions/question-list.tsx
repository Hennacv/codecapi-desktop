import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question } from 'renderer/utils/types';
import QuestionCard from './question-card';

function Home() {
  const { data: questions = [] } = useGetQuestions();

  return (
    <div>
      <div className="columns is-multiline is-centered">
        {questions.map((q: Question) => (
          <div key={q.id} className="column is-12">
            <QuestionCard question={q} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
