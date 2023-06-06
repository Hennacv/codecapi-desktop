import { useNavigate, useParams } from 'react-router-dom';
import Button from 'renderer/components/ui/button/button';
import { useGetQuestion } from 'renderer/hooks/use-get-question';
import QuestionForm from '../question-form/question-form';
import {
  QuestionFormContainer,
  QuestionFormDescription,
  QuestionFormHeader,
  QuestionFormTitle,
} from '../question-form/question-form-styles.css';
import { useTranslation } from 'react-i18next';
import { QuestionEditAllButtons, QuestionEditContainer } from './question-edit-styles.css';

const QuestionEdit = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useGetQuestion(Number(id));
  const navigate = useNavigate();
  if (!data) {
    return null;
  }

  return (
    <div className={QuestionEditContainer}>
      <div className={QuestionEditAllButtons}>
        <Button
          text={t('button.back')}
          type="button"
          variant="small"
          onClick={() => navigate(`/questions/${id}`)}
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={QuestionFormContainer}>
          <header className={QuestionFormHeader.spacing}>
            <h1 className={QuestionFormTitle}>{t('question.edit.page.title')}</h1>
            <p className={QuestionFormDescription}>
              {t('question.edit.page.description')}
            </p>
          </header>
          <QuestionForm
            title={data.title}
            blocks={data.blocks}
            tags={data.tags}
            id={data.id}
            isEditing={true}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionEdit;
