import { useMutation, useQueryClient } from "react-query"
import api from "renderer/utils/api";

interface DeleteVoteProps {
  onSuccess: () => void;
}

export const useDeleteComment = ({ onSuccess }: DeleteVoteProps) => {
  return useMutation(
    (id: number) => {
      return api.delete(`/comments/${id}`);
    },
    { onSuccess }
  );
}