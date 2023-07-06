import { useQuery } from 'react-query';
import api from 'renderer/utils/api';

async function fetchTricks() {
  const res = await api.get('tricks');
  return res.data;
}

export function useGetTricks() {
  return useQuery('tricks', fetchTricks);
}
