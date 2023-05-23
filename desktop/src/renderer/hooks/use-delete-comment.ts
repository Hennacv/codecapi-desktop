import { useMutation, useQueryClient } from "react-query"
import api from "renderer/utils/api";

interface DeleteVoteProps {
  onSuccess: () => void;
}

export function useDeleteComment({ onSuccess }: DeleteVoteProps) {
  return useMutation(
    (id: number) => {
      return api.delete(`/comments/${id}`);
    },
    { onSuccess }
  );
}