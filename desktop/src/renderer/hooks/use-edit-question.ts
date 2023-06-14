import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import api from 'renderer/utils/api';
import { QuestionDto } from 'renderer/utils/types';

export const useEditQuestion = (id?: number) => {
  const {t} = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (!id) return;
  return useMutation(
    (questionData: QuestionDto) => {
      return api.patch(`/questions/${id}`, questionData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['questions']);
        toastSuccess(t('toast.success.question.edit'));
        navigate(`/questions/${id}`);
      },
    }
  );
};
