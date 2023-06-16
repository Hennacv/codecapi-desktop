import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question, Tag } from 'renderer/utils/types';
import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import {
  NewQuestionButtonPosition,
  QuestionListTitle,
} from '../question-form/question-form-styles.css';
import { QuestionListContainer } from './question-list-styles.css';
import { useTranslation } from 'react-i18next';

import QuestionCard from '../question-card/question-card';
import Button from 'renderer/components/ui/button/button';
import IconAdd from 'assets/icons/icon-add';
import GroupedFilter from 'renderer/components/ui/grouped-filter/grouped-filter';

const QuestionList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data = [], refetch } = useGetQuestions();
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [isShown, setIsShown] = useState(false);

  let result = data.filter((question) =>
    question.title.toLowerCase().includes(searchTerm)
  );

  if (!!tags.length) {
    result = result.filter((question) => {
      return question.tags.some((questionTag) => {
        return tags.some((tag) => tag.id === questionTag.id);
      });
    });
  }

  const filteredQuestions = data.filter((question) => {
    if (tags.length === 0) {
      return question.title.toLowerCase().includes(searchTerm);
    } else {
      return (
        question.title.toLowerCase().includes(searchTerm) &&
        tags.every((tag) =>
          question.tags.some((questionTag) => questionTag.id === tag.id)
        )
      );
    }
  });

  useEffect(() => {
    const scrollableElement = document.getElementById('main');

    if (scrollableElement) {
      scrollableElement.style.overflowY = isShown ? 'hidden' : 'visible';
    }
  }, [isShown]);

  const onNewQuestion = () => {
    navigate('/questions/new');
  };

  return (
    <div>
      <GroupedFilter
        tags={tags}
        setTags={setTags}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className={NewQuestionButtonPosition}>
        <h3 className={QuestionListTitle}>
          Vragen: {filteredQuestions.length}
        </h3>
        <Button type="button" variant="small" onClick={() => onNewQuestion()}>
          {t('question.new.button.navigate')}
          <IconAdd variant={'small'} />
        </Button>
      </div>
      <div className={QuestionListContainer}>
        {filteredQuestions.map((question: Question) => (
          <QuestionCard
            key={question.id}
            question={question}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
