import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Trick } from 'renderer/utils/types';

const fetchTrick = async (id: number): Promise<Trick> => {
  const res = await api.get(`tricks/${id}`);
  return res.data;
};

export const useGetTrick = (id: number) => {
  return useQuery(['tricks', id], () => fetchTrick(id), {
    enabled: !!id,
  });
};
