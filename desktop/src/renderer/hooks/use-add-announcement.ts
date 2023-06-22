import { useMutation } from 'react-query';
import api from 'renderer/utils/api';
import { AnnouncementDto } from 'renderer/utils/types';

interface AddAnnouncementProps {
  onSuccess: () => void;
}

export const useAddAnnouncement = ({ onSuccess }: AddAnnouncementProps) => {
  return useMutation(
    (data: AnnouncementDto) => {
      return api.post('/announcements', data);
    },
    { onSuccess }
  );
}