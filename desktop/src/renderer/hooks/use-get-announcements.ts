import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Announcement } from 'renderer/utils/types';

const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const res = await api.get('announcements');
  return res.data;
};

export const useGetAnnouncements = () => {
  return useQuery('announcement', fetchAnnouncements);
};
