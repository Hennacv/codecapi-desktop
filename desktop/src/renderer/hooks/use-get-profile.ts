import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Profile } from '../utils/types';

const fetchProfile = async (id: number): Promise<Profile> => {
  const res = await api.get(`profile/${id}`);
  return res.data;
}

export const useGetProfile = (id: number) => {
  return useQuery(['profile', id], () => fetchProfile(id), {
    enabled: !!id,
  });
}
