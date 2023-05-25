import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "renderer/utils/api";
import { EditProfileDto } from "renderer/utils/types";

export const useEditProfile = (id?:number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if(!id)return;
  return useMutation(
    (userData: EditProfileDto) => {
      return api.patch(`/users/${id}`, userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        navigate(`/users/${id}`);
      },
    }
  );
};