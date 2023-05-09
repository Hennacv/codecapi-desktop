import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { User } from 'renderer/utils/types';

async function fetchUsers(): Promise<User[]> {
  const res = await api.get('users');
  return res.data;
}

export function useGetUsers() {
  return useQuery('users', fetchUsers);
}
