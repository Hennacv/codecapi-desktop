import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
// import { Question } from 'renderer/utils/types';

async function fetchTricks() {
  const res = await api.get('tricks');
  return res.data;
}

export function useGetTricks() {
  return useQuery('tricks', fetchTricks);
}
