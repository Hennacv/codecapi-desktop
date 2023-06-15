import { useMutation } from "react-query"
import api from "renderer/utils/api";

interface DeleteAnswerProps {
  onSuccess: () => void;
}

export const useDeleteAnswer = ({ onSuccess }: DeleteAnswerProps) => {
  return useMutation(
    (id: number) => {
      return api.delete(`/answer/${id}`);
    },
    { onSuccess }
  );
}