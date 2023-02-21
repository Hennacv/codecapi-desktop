import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AddTagDto } from 'renderer/utils/types';

interface AddTagProps {
  onSuccess: () => void;
}

export function useAddTag({ onSuccess }: AddTagProps) {
  return useMutation(
    (data: AddTagDto) => {
      return api.post('/tags', data);
    },
    { onSuccess }
  );
}
