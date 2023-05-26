import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import api from 'renderer/utils/api';

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    (id: string | undefined) => {
      return api.delete(`http://localhost:3000/questions/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['questions']);
        navigate('/questions');
      },
    }
  );
};
