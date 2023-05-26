import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import api from 'renderer/utils/api';
import { QuestionDto } from 'renderer/utils/types';

export const useEditQuestion = (id?: number) => {
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
        navigate('/');
      },
    }
  );
};
