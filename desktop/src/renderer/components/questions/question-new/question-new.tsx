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
        <h1 className={QuestionFormTitle}>{t('questionNew.pageTitle')}</h1>
        <p className={QuestionFormDescription}>{t('questionNew.pageDescription')}</p>
      </header>
      <QuestionForm blocks={[]} title="" tags={[]} />
    </div>
  );
};

export default NewQuestion;
