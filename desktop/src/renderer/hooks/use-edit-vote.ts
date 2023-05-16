import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AddVoteDto } from 'renderer/utils/types';

interface EditVoteProps {
  onSuccess: () => void;
  voteId: number;
  userId: number;
}

export function useEditVote({ onSuccess, voteId, userId }: EditVoteProps) {
  return useMutation(
    (vote: AddVoteDto) => {
      const userInVote = vote.users?.some((user) => user.id === userId);
      let data = { ...vote };

      if (userInVote) {
        data.users?.splice(
          data.users.findIndex((user) => user.id === userId), 1);
      } else {
        data.users?.push({ id: userId });
      }

      return api.patch(`/votes/${voteId}`, data);
    },
    { onSuccess }
  );
}
