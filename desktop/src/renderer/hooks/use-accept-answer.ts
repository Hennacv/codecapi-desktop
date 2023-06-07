import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { UpdateAnswerDto } from 'renderer/utils/types';

interface AddAcceptedProps {
  onSuccess: () => void;
  answerId: number;
}

export function useAcceptAnswer({ onSuccess, answerId }: AddAcceptedProps) {
  return useMutation(
    (data: UpdateAnswerDto) => {
      return api.patch(`/answer/${answerId}`, data);
    },
    { onSuccess }
  );
}