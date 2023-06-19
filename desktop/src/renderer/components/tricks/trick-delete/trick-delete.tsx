import Modal from "renderer/components/ui/modal/modal";
import Button from 'renderer/components/ui/button/button';
import { DeleteButtonContainer, DeleteTrickMessage } from './trick-delete-styles.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import { useDeleteTrick } from 'renderer/hooks/use-delete-trick';

interface DeleteProps {
  id: string | undefined;
  isShown: boolean;
  onClose: (arg0: boolean) => void;
  refetch: () => void;
}

const TrickDelete = ({id, isShown, onClose, refetch}: DeleteProps) => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const deleteTrick = useDeleteTrick({
    onSuccess: () => {
      toastSuccess(t('toast.success.trick.delete'));
      refetch();
    }
  });

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <div className={DeleteTrickMessage}>
        <p>{t('modal.title.trick.delete')}</p>
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
       onClick={() => deleteTrick.mutate(id)}
       />
       </div>
    </Modal>
  );
};

export default TrickDelete;
