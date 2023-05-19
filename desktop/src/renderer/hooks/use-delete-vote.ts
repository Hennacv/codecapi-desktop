import { useMutation } from 'react-query';
import api from 'renderer/utils/api';

interface DeleteVoteProps {
  onSuccess: () => void;
}

export function useDeleteVote({ onSuccess }: DeleteVoteProps) {
  return useMutation(
    (id: number) => {
      return api.delete(`/votes/${id}`);
    },
    { onSuccess }
  );
}
