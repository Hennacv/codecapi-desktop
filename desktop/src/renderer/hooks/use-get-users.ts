import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { User } from 'renderer/utils/types';

const fetchUsers = async (): Promise<User[]> => {
  const res = await api.get('users');
  return res.data;
}

export const useGetUsers = () => {
  return useQuery('users', fetchUsers);
}
