import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { TrickDto } from 'renderer/utils/types';

interface AddTrickProps {
  onSuccess: () => void;
}

export function useAddTrick({ onSuccess }: AddTrickProps) {
  return useMutation(
    (data: TrickDto) => {
      return api.post('/tricks', data);
    },
    { onSuccess }
  );
}
