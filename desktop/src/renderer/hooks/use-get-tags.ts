import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Tag } from 'renderer/utils/types';

async function fetchTags(): Promise<Tag[]> {
  const res = await api.get('tags');
  return res.data;
}

export function useGetTags() {
  return useQuery('tags', fetchTags);
}
