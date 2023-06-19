import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import api from 'renderer/utils/api';
import { TrickDto } from 'renderer/utils/types';

export const useEditTrick = (id?: number) => {
  const {t} = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (!id) return;
  return useMutation(
    (trickData: TrickDto) => {
      return api.patch(`/tricks/${id}`, trickData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tricks']);
        toastSuccess(t('toast.success.trick.edit'));
        navigate(`/tricks`);
      },
    }
  );
};