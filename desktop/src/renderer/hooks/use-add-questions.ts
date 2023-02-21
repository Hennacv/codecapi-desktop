import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AddQuestionDto } from 'renderer/utils/types';

interface AddQuestionProps {
  onSuccess: () => void;
}

export function useAddQuestion({ onSuccess }: AddQuestionProps) {
  return useMutation(
    (data: AddQuestionDto) => {
      return api.post('/questions', data);
    },
    { onSuccess }
  );
}
