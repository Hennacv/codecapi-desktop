import { useMutation } from "react-query"
import api from "renderer/utils/api";

interface DeleteTrickProps {
  onSuccess: () => void;
}

export const useDeleteTrick = ({ onSuccess }: DeleteTrickProps) => {
  return useMutation(
    (id: string | undefined) => {
      return api.delete(`/tricks/${id}`);
    },
    { onSuccess }
  );
}
