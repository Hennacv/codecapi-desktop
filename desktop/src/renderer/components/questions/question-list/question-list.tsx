import {
  NewQuestionButtonPosition,
  QuestionListTitle,
} from '../question-form/question-form-styles.css';
import {
  QuestionListContainer,
  QuestionListFilters,
} from './question-list-styles.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from 'renderer/utils/types';
import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { useSelectedTags } from 'renderer/hooks/use-selected-tags';
import { useSelectedUsers } from 'renderer/hooks/use-selected-users';

import QuestionCard from '../question-card/question-card';
import Button from 'renderer/components/ui/button/button';
import IconAdd from 'assets/icons/icon-add';
import FilterSelected from 'renderer/components/ui/filter/filter-selected/filter-selected';
import Filter from 'renderer/components/ui/filter/filter';
import Search from 'renderer/components/ui/search/search';

const QuestionList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const { data = [], refetch } = useGetQuestions();
  const [searchTerm, setSearchTerm] = useState('');
  const [isShown, setIsShown] = useState(false);

  let tagsHandler = useSelectedTags([]);
  let usersHandler = useSelectedUsers([]);

  const filteredQuestions = data.filter((question) => {
    if (tagsHandler.selectedTags.length === 0 && usersHandler.selectedUsers.length === 0) {
      return question.title.toLowerCase().includes(searchTerm);
    } else {
      return (
        question.title.toLowerCase().includes(searchTerm) &&
        tagsHandler.selectedTags.every((tag) =>
          question.tags.some((questionTag) => questionTag.id === tag.id)
        ) &&
        usersHandler.selectedUsers.every((user) => question.user.name === user.name)
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
      <div className={QuestionListFilters}>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder={t('common.search')}
          tagsHandler={tagsHandler}
          usersHandler={usersHandler}
        />
        <Filter tagsHandler={tagsHandler} usersHandler={usersHandler} />
      </div>
      <FilterSelected
        selectedUsers={usersHandler.selectedUsers}
        selectedTags={tagsHandler.selectedTags}
        deleteUser={(user) => usersHandler.deleteUser(user)}
        deleteTag={(tag) => tagsHandler.deleteTag(tag)}
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
