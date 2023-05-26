import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { User } from '../utils/types';

async function fetchUser(uid?: string): Promise<User> {
  const res = await api.get(`users/${uid}`);
  return res.data;
}

export function useGetUser(uid?: string) {
  return useQuery(['users', uid], () => fetchUser(uid), {
    enabled: !!uid,
  });
}
