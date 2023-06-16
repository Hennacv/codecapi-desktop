import {
  FilterActionContainer,
  FilterContainer,
  GroupedFilterContainer,
} from './grouped-filter-styles.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useSelectedTags } from 'renderer/hooks/use-selected-tags';
import { Tag } from 'renderer/utils/types';

import Button from '../button/button';
import Filter from '../filter/filter';
import Search from '../search/search';
import TagButton from 'renderer/components/tags/tag-button/tag-button';
import IconRemove from 'assets/icons/icon-remove';

interface GroupedFilterProps {
  tags: Tag[];
  searchTerm: string;
  setTags: (tag: Tag[]) => void;
  setSearchTerm: (searchTerm: string) => void;
}

const GroupedFilter = ({
  tags,
  setTags,
  searchTerm,
  setSearchTerm,
}: GroupedFilterProps) => {
  const { t } = useTranslation();

  const [searchTags, setSearchTags] = useState<Tag[]>([]);
  const [isShown, setIsShown] = useState(false);

  let selectedTags = useSelectedTags(tags);

  const addTag = (tag: Tag) => {
    selectedTags.addTag(tag);
    setTags([...tags, tag]);
    setSearchTerm('');
  };

  const deleteTag = (tag: Tag) => {
    selectedTags.deleteTag(tag);
    const tempTags = tags.filter((selectedTag: Tag) => selectedTag !== tag);
    setTags(tempTags);
  };

  useEffect(() => {
    showTags(searchTerm);
  }, [searchTerm, tags]);

  const showTags = (searchTerm: string) => {
    if (!!searchTerm) {
      setSearchTags(
        selectedTags.tags
          .filter((tag) =>
            tag.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .slice(0, 3)
      );
    } else {
      setSearchTags([]);
    }
  };

  return (
    <div className={GroupedFilterContainer}>
      <div className={FilterActionContainer}>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder={t('common.search')}
          searchTags={searchTags}
          addTag={addTag}
        />
        <Button
          text={t('button.filter')}
          variant="small"
          type="button"
          onClick={() => setIsShown(true)}
        />
        <Filter
          selectedTags={selectedTags.selectedTags}
          remainingTags={selectedTags.tags}
          addTag={addTag}
          deleteTag={deleteTag}
          isShown={isShown}
          onClose={() => setIsShown(false)}
        />
      </div>
      <div className={FilterContainer}>
        {tags.map((tag) => (
          <TagButton
            title={tag.title}
            color={tag.color}
            variant="defaultAdd"
            onClick={() => deleteTag(tag)}
            key={tag.id}
          >
            <IconRemove variant="small" />
          </TagButton>
        ))}
      </div>
    </div>
  );
};

export default GroupedFilter;
