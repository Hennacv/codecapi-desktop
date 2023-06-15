import { useQuery } from 'react-query';
import api from 'renderer/utils/api';
import { Tag } from 'renderer/utils/types';

const fetchTags = async (): Promise<Tag[]> => {
  const res = await api.get('tags');
  return res.data;
}

export const useGetTags = () => {
  return useQuery('tags', fetchTags);
}
