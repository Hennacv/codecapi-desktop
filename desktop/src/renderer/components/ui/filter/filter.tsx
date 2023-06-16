import { Tag, Filter } from 'renderer/utils/types';
import { FilterTag, FilterTitle } from './filter-styles.css';
import { useTranslation } from 'react-i18next';

import TagButton from 'renderer/components/tags/tag-button/tag-button';
import Modal from '../modal/modal';

import IconRemove from 'assets/icons/icon-remove';
import IconAdd from 'assets/icons/icon-add';

const Filter = ({
  selectedTags,
  remainingTags,
  addTag,
  deleteTag,
  isShown,
  onClose,
}: Filter) => {
  const { t } = useTranslation();
  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <h4 className={FilterTitle}>{t('common.tags')}</h4>
      <div className={FilterTag}>
        {remainingTags.map((tag: Tag) => (
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
        {selectedTags.map((tag) => (
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
