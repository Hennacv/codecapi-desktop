import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Announcement } from 'renderer/utils/types';

const fetchAnnouncement = async (id: number): Promise<Announcement> => {
  const res = await api.get(`announcements/${id}`);
  return res.data;
}

export const useGetAnnouncement = (id: number) => {
  return useQuery(['announcements', id], () => fetchAnnouncement(id), {
    enabled: !!id,
  });
}