import { Tag, User } from 'renderer/utils/types';
import { FilterSelectedContainer } from './filter-selected-styles.css';

import IconRemove from 'assets/icons/icon-remove';
import TagButton from 'renderer/components/tags/tag-button/tag-button';

interface FilterSelectedProps {
  selectedUsers?: User[];
  selectedTags?: Tag[];
  deleteUser: (user: User) => void;
  deleteTag: (tag: Tag) => void;
}

const FilterSelected = ({
  selectedUsers,
  selectedTags,
  deleteUser,
  deleteTag,
}: FilterSelectedProps) => {
  return (
    <div className={FilterSelectedContainer}>
      {!!selectedUsers && selectedUsers.map((user) => (
        <TagButton
          title={user.name}
          color="blue"
          variant="defaultAdd"
          onClick={() => deleteUser(user)}
          key={user.uid}
        >
          <IconRemove variant="small" />
        </TagButton>
      ))}
      {!!selectedTags && selectedTags.map((tag) => (
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
  );
};

export default FilterSelected;
