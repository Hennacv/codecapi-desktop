import { useDeleteQuestion } from 'renderer/hooks/use-delete-question';
import Modal from "renderer/components/ui/modal/modal";
import Button from 'renderer/components/ui/button/button';
import { DeleteButtonContainer, DeleteQuestionMessage } from './question-delete-styles.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';

interface DeleteProps {
  id: string | undefined;
  isShown: boolean;
  onClose: (arg0: boolean) => void;
}

const QuestionDelete = ({id, isShown, onClose}: DeleteProps) => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const deleteQuestion = useDeleteQuestion({
    onSuccess: () => {
      toastSuccess(t('toast.success.question.delete'));
      navigate("/questions");
    }
  });

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <div className={DeleteQuestionMessage}>
        <p>{t('modal.title.question.delete')}</p>
      </div>
      <div className={DeleteButtonContainer}>
      <Button
       text={t('button.cancel')}
       variant="small"
       type="button"
       onClick={() => onClose(false)}
       />
      <Button
       text={t('button.delete')}
       variant="delete"
       type="button"
       onClick={() => deleteQuestion.mutate(id)}
       />
       </div>
    </Modal>
  );
};

export default QuestionDelete;
