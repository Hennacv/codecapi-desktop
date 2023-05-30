import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AddAnswerDto } from 'renderer/utils/types';

interface AddAcceptedProps {
  onSuccess: () => void;
  answerId: number;
}

export function useAcceptAnswer({ onSuccess, answerId }: AddAcceptedProps) {
  return useMutation(
    (data: AddAnswerDto) => {
      return api.patch(`/answer/${answerId}`, data);
    },
    { onSuccess }
  );
}