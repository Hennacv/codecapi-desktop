import { Tag, Filter } from 'renderer/utils/types';
import { useSelectedTags } from 'renderer/hooks/use-selected-tags';
import { FilterTag, FilterTitle } from './filter-styles.css';
import TagButton from 'renderer/components/tags/tag-button/tag-button';
import Modal from '../modal/modal';
import { useTranslation } from 'react-i18next';
import IconRemove from 'assets/icons/icon-remove';
import IconAdd from 'assets/icons/icon-add';

const Filter = ({ tags, setTags, isShown, onClose }: Filter) => {
  const {t} = useTranslation();
  let selectedTags = useSelectedTags(tags);

  const addTag = (tag: Tag) => {
    selectedTags.addTag(tag);
    setTags([...tags, tag]);
  };

  const deleteTag = (tag: Tag) => {
    selectedTags.deleteTag(tag);
    const tempTags = tags.filter((selectedTag: Tag) => selectedTag !== tag);
    setTags(tempTags);
  };

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <h4 className={FilterTitle}>{t('common.tags')}</h4>
      <div className={FilterTag}>
        {selectedTags.tags.map((tag: Tag) => (
          <TagButton
            key={tag.id}
            title={tag.title}
            color={tag.color}
            variant="defaultAdd"
            onClick={() => addTag(tag)}
          >
            <IconAdd variant="small" />
          </TagButton>
        ))}
      </div>
      <h4 className={FilterTitle}>{t('filter.title.selected')}</h4>
      <div className={FilterTag}>
        {selectedTags.selectedTags.map((tag) => (
          <TagButton
            key={tag.id}
            title={tag.title}
            color={tag.color}
            variant="defaultAdd"
            onClick={() => deleteTag(tag)}
          >
            <IconRemove variant="small" />
          </TagButton>
        ))}
      </div>
    </Modal>
  );
};

export default Filter;
