import QuestionForm from '../question-form/question-form';
import {
  QuestionFormContainer,
  QuestionFormDescription,
  QuestionFormHeader,
  QuestionFormItem,
  QuestionFormTitle,
} from '../question-form/question-form-styles.css';

const NewQuestion = () => {
  return (
    <div className={QuestionFormContainer}>
      <header className={QuestionFormHeader.basic}>
        <h1 className={QuestionFormTitle}>New question</h1>
        <p className={QuestionFormDescription}>
          Use the form below to submit a question to all CodeCapi employees.
        </p>
      </header>
      <QuestionForm blocks={[]} title="" tags={[]} />
    </div>
  );
};

export default NewQuestion;
