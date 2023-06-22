import { useMutation } from "react-query"
import api from "renderer/utils/api";

interface DeleteAnnouncementProps {
  onSuccess: () => void;
}

export const useDeleteAnnouncement = ({ onSuccess }: DeleteAnnouncementProps) => {
  return useMutation(
    (id: string | undefined) => {
      return api.delete(`/announcements/${id}`);
    },
    { onSuccess }
  );
}
