import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Question } from 'renderer/utils/types';

const fetchQuestions = async (): Promise<Question[]> => {
  const res = await api.get('questions');
  return res.data;
}

export const useGetQuestions = () => {
  return useQuery('questions', fetchQuestions);
}
