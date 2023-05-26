import { useMutation, useQueryClient } from "react-query"
import api from "renderer/utils/api";

interface DeleteQuestionProps {
  onSuccess: () => void;
}

export function useDeleteQuestion({ onSuccess }: DeleteQuestionProps) {
  return useMutation(
    (id: string | undefined) => {
      return api.delete(`/questions/${id}`);
    },
    { onSuccess }
  );
}
