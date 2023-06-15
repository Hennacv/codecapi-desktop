import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { User } from '../utils/types';

const fetchUser = async (uid?: string): Promise<User> => {
  const res = await api.get(`users/${uid}`);
  return res.data;
}

export const useGetUser = (uid?: string) => {
  return useQuery(['users', uid], () => fetchUser(uid), {
    enabled: !!uid,
  });
}
