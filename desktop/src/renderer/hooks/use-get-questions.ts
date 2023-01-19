import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Question } from 'renderer/utils/types';

async function fetchQuestions(): Promise<Question[]> {
  const res = await api.get('questions');
  return res.data;
}

export function useGetQuestions() {
  return useQuery('questions', fetchQuestions);
}
