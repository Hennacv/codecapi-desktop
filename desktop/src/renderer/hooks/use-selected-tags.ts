import { useState } from 'react';
import { useGetTags } from 'renderer/hooks/use-get-tags';
import { Tag } from 'renderer/utils/types';

export function useSelectedTags(currentTags: Tag[]) {
  const { data: tags = [] } = useGetTags();
  const [selectedTags, setSeletectTags] = useState<Tag[]>(currentTags);
  const addTag = (addedTag: Tag) => {
    setSeletectTags([...selectedTags, addedTag]);
  };

  const deleteTag = (removedTag: Tag) => {
    setSeletectTags(selectedTags.filter((tag) => tag.id !== removedTag.id));
  };

  return {
    tags: tags
      .filter(
        (tag) => !selectedTags.some((selectedTag) => selectedTag.id === tag.id)
      )
      .sort((a, b) => a.id - b.id),
    selectedTags,
    addTag,
    deleteTag,
  };
}
