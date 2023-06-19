import { useGetUsers } from 'renderer/hooks/use-get-users';
import { User } from 'renderer/utils/types';
import { UserCardsContainer } from './user-card/user-card-styles.css';
import { SFContainer, UserListFilters } from '../ui/search/search-styles.css';
import { useState } from 'react';
import { useSelectedTags } from 'renderer/hooks/use-selected-tags';
import { useSelectedUsers } from 'renderer/hooks/use-selected-users';
import { useTranslation } from 'react-i18next';

import UserCard from './user-card/user-card';
import FilterSelected from '../ui/filter/filter-selected/filter-selected';
import Filter from '../ui/filter/filter';
import Search from '../ui/search/search';

const UserList = () => {
  const { t } = useTranslation();

  const { data: fetchedUsers = [] } = useGetUsers();
  const [searchTerm, setSearchTerm] = useState('');

  let tagsHandler = useSelectedTags([]);
  let usersHandler = useSelectedUsers([]);

  const filteredUsers = fetchedUsers.filter((user) => {
    if (
      tagsHandler.selectedTags.length === 0 &&
      usersHandler.selectedUsers.length === 0
    ) {
      return user.name.toLowerCase().includes(searchTerm);
    } else {
      return (
        user.name.toLowerCase().includes(searchTerm) &&
        tagsHandler.selectedTags.every((tag) =>
          user.tags.some((userTag) => userTag.id === tag.id)
        )
      );
    }
  });

  return (
    <>
      <div className={SFContainer}>
        <div className={UserListFilters}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder={t('common.search')}
            tagsHandler={tagsHandler}
          />
          <Filter tagsHandler={tagsHandler} />
        </div>
        <FilterSelected
          selectedUsers={usersHandler.selectedUsers}
          selectedTags={tagsHandler.selectedTags}
          deleteUser={(user) => usersHandler.deleteUser(user)}
          deleteTag={(tag) => tagsHandler.deleteTag(tag)}
        />
      </div>
      <div className={UserCardsContainer}>
        {filteredUsers
          .sort((a, b) => a.id - b.id)
          .map((user: User, index) => (
            <UserCard user={user} key={index} />
          ))}
      </div>
    </>
  );
};

export default UserList;
