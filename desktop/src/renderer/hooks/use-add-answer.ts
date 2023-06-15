import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AddAnswerDto } from 'renderer/utils/types';

interface AddAnswerProps {
  onSuccess: () => void;
}

export const useAddAnswer = ({ onSuccess }: AddAnswerProps) => {
  return useMutation(
    (data: AddAnswerDto) => {
      return api.post('/answer', data);
    },
    { onSuccess }
  );
}
