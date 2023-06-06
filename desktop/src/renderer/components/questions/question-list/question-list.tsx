import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question, Tag } from 'renderer/utils/types';
import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { SFContainer } from 'renderer/components/ui/search/search-styles.css';
import { NewQuestionButtonPosition } from '../question-form/question-form-styles.css';
import QuestionCard from '../question-card/question-card';
import Button from 'renderer/components/ui/button/button';
import Filter from 'renderer/components/ui/filter/filter';
import Search from 'renderer/components/ui/search/search';
import { QuestionListContainer } from './question-list-styles.css';
import { FilterTermContainer } from 'renderer/components/ui/filter/filter-styles.css';
import TagCard from 'renderer/components/tags/tag-card/tag-card';

import { useTranslation } from 'react-i18next';
import IconAdd from 'assets/icons/icon-add';

const QuestionList = () => {
  const {t} = useTranslation();
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
      <div className={SFContainer}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={t('search.placeholder.search')} />
        <Button
          text={t('common.button.filter')}
          variant="small"
          type="button"
          onClick={() => setIsShown(true)}
        />
        <Filter
          tags={tags}
          setTags={setTags}
          isShown={isShown}
          onClose={() => setIsShown(false)}
        />
      </div>
      <div className={NewQuestionButtonPosition}>
        <div className={FilterTermContainer}>
          {!!tags.length && (
            <>
              {tags.map((tag) => (
                <TagCard
                  key={tag.id}
                  title={tag.title}
                  color={tag.color}
                  variant="small"
                />
              ))}
            </>
          )}
        </div>
        <Button
          type="button"
          variant="small"
          onClick={() => onNewQuestion()}
        >
          {t('question.new.button.navigate')}
          <IconAdd variant={'small'} />
        </Button>
      </div>
      <div className={QuestionListContainer}>
        {result.map((question: Question) => (
          <QuestionCard key={question.id} question={question} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
