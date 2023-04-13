import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { Question, Tag } from 'renderer/utils/types';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../question-card/question-card';
import { NewQuestionButtonPosition } from '../new-question/new-question-styles.css';
import Button from 'renderer/components/ui/button/button';
import Filter from 'renderer/components/ui/filter/filter';
import { useEffect, useState } from 'react';

interface Filtered {
  tags: Tag[];
}

interface QuestionTagsIncludesTag { (arg0: Tag[], arg1: Tag): boolean }

const questionTagsIncludesTag: QuestionTagsIncludesTag = (questionTags, tag) => questionTags.some(questionTag => questionTag.id === tag.id);

const QuestionList = () => {
  const { data = [] } = useGetQuestions();
  const navigate = useNavigate();
  const [questions,setQuestions]=useState(data);
  const [items, setItems] = useState<Filtered>({
    tags: [],
  });

  useEffect(()=> {
    if (items.tags.length === 0) {
      setQuestions(data);
    }
    if(items.tags.length > 0) {
      setQuestions(() => {
        let newQuestions: Question[] = [];

        for (let question of data) {
          items.tags.forEach((tag) => {
            if (questionTagsIncludesTag(question.tags, tag)) {
              newQuestions.push(question);
            }
          })
        }
        return newQuestions;
      })
    }
  },[items.tags])

  const onNewQuestion = () => {
    navigate(`/questions/new`);
  }

  return (
    <div>
      <div>
        <Filter items={items} setItems={setItems} />
      </div>
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
