import Modal from "renderer/components/ui/modal/modal";
import Button from 'renderer/components/ui/button/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import { useDeleteAnnouncement } from "renderer/hooks/use-delete-announcement";
import { DeleteAnnouncementMessage, DeleteButtonContainer } from "./announcement-delete-styles.css";

interface DeleteProps {
  id: string | undefined;
  isShown: boolean;
  onClose: (arg0: boolean) => void;
}

const AnnouncementDelete = ({id, isShown, onClose}: DeleteProps) => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const deleteAnnouncment = useDeleteAnnouncement({
    onSuccess: () => {
      toastSuccess(t('toast.success.announcement.delete'));
      navigate("/announcements");
    }
  });

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <div className={DeleteAnnouncementMessage}>
        <p>{t('modal.title.announcement.delete')}</p>
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
       onClick={() => deleteAnnouncment.mutate(id)}
       />
       </div>
    </Modal>
  );
};

export default AnnouncementDelete;
