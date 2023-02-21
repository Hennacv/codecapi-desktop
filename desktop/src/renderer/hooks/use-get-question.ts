import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Question } from 'renderer/utils/types';

async function fetchQuestion(id: number): Promise<Question> {
  const res = await api.get(`questions/${id}`);
  return res.data;
}

export function useGetQuestion(id: number) {
  return useQuery(['questions', id], () => fetchQuestion(id));
}
