import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AddVoteDto } from 'renderer/utils/types';

interface AddVoteProps {
  onSuccess: () => void;
}

export const useAddVote = ({ onSuccess }: AddVoteProps) => {
  return useMutation(
    (data: AddVoteDto) => {
      return api.post('/votes', data);
    },
    { onSuccess }
  );
}
