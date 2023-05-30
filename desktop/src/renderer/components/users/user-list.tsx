import { useGetUsers } from 'renderer/hooks/use-get-users';
import { User } from 'renderer/utils/types';
import { UserCardsContainer } from './user-card/user-card-styles.css';
import UserCard from './user-card/user-card';
import { SFContainer } from '../ui/search/search-styles.css';
import { useState } from 'react';
import Search from '../ui/search/search';

const UserList = () => {
  const { data: users = [] } = useGetUsers();
  const [searchTerm, setSearchTerm] = useState('');

  console.log(users)

  let result = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className={SFContainer}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className={UserCardsContainer}>
        {result
          .sort((a, b) => a.id - b.id)
          .map((user: User, index) => (
            <UserCard user={user} key={index} />
            ))}
      </div>
    </>
  );
};

export default UserList;
