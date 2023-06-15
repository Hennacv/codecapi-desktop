import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { QuestionDto } from 'renderer/utils/types';

interface AddQuestionProps {
  onSuccess: () => void;
}

export const useAddQuestion = ({ onSuccess }: AddQuestionProps) => {
  return useMutation(
    (data: QuestionDto) => {
      return api.post('/questions', data);
    },
    { onSuccess }
  );
}
