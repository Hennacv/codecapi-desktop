import { useDeleteQuestion } from 'renderer/hooks/use-delete-question';
import Modal from "renderer/components/ui/modal/modal";
import Button from 'renderer/components/ui/button/button';
import { DeleteButtonContainer, DeleteQuestionMessage } from './question-delete-styles.css';
import { useNavigate } from 'react-router-dom';

interface DeleteProps {
  id: string | undefined,
  isShown: boolean;
  onClose: (arg0:boolean) => void;
}

const QuestionDelete = ({id, isShown, onClose}: DeleteProps) => {
  const navigate = useNavigate();

  const deleteQuestion = useDeleteQuestion({
    onSuccess: () => navigate("/questions"),
  });

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <div className={DeleteQuestionMessage}>
        <p> Are you sure you want to delete this question?</p>
      </div>
      <div className={DeleteButtonContainer}>
      <Button
       text="Cancel"
       variant="small"
       type="button"
       onClick={() => onClose(false)}
       />
      <Button
       text="Delete"
       variant="delete"
       type="button"
       onClick={() => deleteQuestion.mutate(id)}
       />
       </div>
    </Modal>
    )


}

export default QuestionDelete;
