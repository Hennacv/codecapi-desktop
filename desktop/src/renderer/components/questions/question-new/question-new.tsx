import { useTranslation } from 'react-i18next';
import QuestionForm from '../question-form/question-form';
import {
  QuestionFormContainer,
  QuestionFormDescription,
  QuestionFormHeader,
  QuestionFormItem,
  QuestionFormTitle,
} from '../question-form/question-form-styles.css';

const NewQuestion = () => {
  const {t} = useTranslation();
  return (
    <div className={QuestionFormContainer}>
      <header className={QuestionFormHeader.basic}>
        <h1 className={QuestionFormTitle}>{t('question.new.page.title')}</h1>
        <p className={QuestionFormDescription}>{t('question.new.page.description')}</p>
      </header>
      <QuestionForm blocks={[]} title="" tags={[]} />
    </div>
  );
};

export default NewQuestion;
