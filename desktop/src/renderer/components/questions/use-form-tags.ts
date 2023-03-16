import { useEffect, useState } from 'react';
import { useGetTags } from 'renderer/hooks/use-get-tags';
import { Tag } from 'renderer/utils/types';

export function useFormTags() {
    const { data: getTags = [],isLoading } = useGetTags();
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTags, setSeletectTags] = useState<Tag[]>([]);

    useEffect(() => {
      if (!isLoading && getTags) {
        setTags(getTags);
      }
    },[isLoading, getTags]);

    const addTag = (addedTag: Tag) => {
        setSeletectTags([...selectedTags, addedTag]);
        setTags(tags.filter((tag) => tag.id !== addedTag.id));
    }

    const deleteTag = (removedTag: Tag) => {
        setTags([...tags, removedTag]);
        setSeletectTags(selectedTags.filter((tag) => tag.id !== removedTag.id));
    }

    return {tags, selectedTags, addTag, deleteTag}
}
