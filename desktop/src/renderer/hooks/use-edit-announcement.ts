import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import api from 'renderer/utils/api';
import { AnnouncementDto } from 'renderer/utils/types';

export const useEditAnnouncement = (id?: number) => {
  const {t} = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (!id) return;
  return useMutation(
    (announcementData: AnnouncementDto) => {
      return api.patch(`/announcements/${id}`, announcementData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['announcements']);
        toastSuccess(t('toast.success.announcement.edit'));
        navigate(`/announcements`);
      },
    }
  );
};