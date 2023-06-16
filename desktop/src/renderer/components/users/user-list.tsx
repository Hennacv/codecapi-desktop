import { useGetUsers } from 'renderer/hooks/use-get-users';
import { Tag, User } from 'renderer/utils/types';
import { UserCardsContainer } from './user-card/user-card-styles.css';
import { SFContainer } from '../ui/search/search-styles.css';
import { useState } from 'react';

import UserCard from './user-card/user-card';
import GroupedFilter from '../ui/grouped-filter/grouped-filter';

const UserList = () => {
  const { data: users = [] } = useGetUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  let result = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  if (!!tags.length) {
    result = result.filter((user) => {
      return user.tags.some((userTag) => {
        return tags.some((tag) => tag.id === userTag.id);
      });
    });
  }

  return (
    <>
      <div className={SFContainer}>
        <GroupedFilter
          tags={tags}
          searchTerm={searchTerm}
          setTags={setTags}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className={UserCardsContainer}>
        {result
          .sort(function (a, b) {
            const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0;
          })
          .map((user: User, index) => (
            <UserCard user={user} key={index} />
          ))}
      </div>
    </>
  );
};

export default UserList;
