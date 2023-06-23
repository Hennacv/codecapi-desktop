import {
  Tag,
  UseSelectedTagsType,
  UseSelectedUsersType,
  User,
} from 'renderer/utils/types';
import { SearchContainer, SearchFilterContainer } from './search-styles.css';
import { useEffect, useState } from 'react';

import InputText from '../input-text/input-text';
import TagButton from 'renderer/components/tags/tag-button/tag-button';
import IconAdd from 'assets/icons/icon-add';

interface SearchProps {
  placeholder?: string;
  searchTerm: string;
  setSearchTerm: (str: string) => void;
  tagsHandler?: UseSelectedTagsType;
  usersHandler?: UseSelectedUsersType;
}

const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder,
  tagsHandler,
  usersHandler,
}: SearchProps) => {
  const [searchTags, setSearchTags] = useState<Tag[]>([]);
  const [searchUsers, setSearchUsers] = useState<User[]>([]);

  useEffect(() => {
    showTags(searchTerm);
    showUsers(searchTerm);
  }, [searchTerm]);

  const showTags = (searchTerm: string) => {
    if (!!searchTerm && !!tagsHandler) {
      setSearchTags(
        tagsHandler.tags
          .filter((tag) =>
            tag.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .slice(0, 2)
      );
    } else {
      setSearchTags([]);
    }
  };
  const showUsers = (searchTerm: string) => {
    if (!!searchTerm && !!usersHandler && usersHandler.selectedUsers.length === 0) {
      setSearchUsers(
        usersHandler.users
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .slice(0, 2)
      );
    } else {
      setSearchUsers([]);
    }
  };

  return (
    <div className={SearchContainer}>
      <InputText
        placeholder={placeholder}
        type="text"
        id="question-search"
        value={searchTerm}
        variant="default"
        onChange={(searchTerm) =>
          setSearchTerm(searchTerm.target.value.toLowerCase())
        }
      />
      <span className={SearchFilterContainer}>
        {!!searchUsers &&
          !!usersHandler &&
          searchUsers.map((user) => (
            <TagButton
              title={user.name}
              color="blue"
              variant="defaultAdd"
              onClick={() => {
                usersHandler.addUser(user);
                setSearchTerm('');
              }}
              key={user.uid}
            >
              <IconAdd variant="small" />
            </TagButton>
          ))}
        {!!searchTags &&
          !!tagsHandler &&
          searchTags.map((tag) => (
            <TagButton
              title={tag.title}
              color={tag.color}
              variant="defaultAdd"
              onClick={() => {
                tagsHandler.addTag(tag);
                setSearchTerm('');
              }}
              key={tag.id}
            >
              <IconAdd variant="small" />
            </TagButton>
          ))}
      </span>
    </div>
  );
};

export default Search;