import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import api from 'renderer/utils/api';
import { EditProfileDto } from 'renderer/utils/types';

export const useEditProfile = (id?: number) => {
  const {t} = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (!id) return;
  return useMutation(
    (userData: EditProfileDto) => {
      return api.patch(`/users/${id}`, userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
        toastSuccess(t('toast.success.user.edit'));
        navigate(`/users/${id}`);
      },
    }
  );
};
