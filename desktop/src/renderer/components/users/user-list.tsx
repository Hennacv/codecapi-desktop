import { useGetUsers } from 'renderer/hooks/use-get-users';
import { User } from 'renderer/utils/types';
import { UserCardsContainer } from './user-card/user-card-styles.css';

import UserCard from './user-card/user-card';

const UserList = () => {
  const { data: users = [] } = useGetUsers();

  return (
    <div className={UserCardsContainer}>
      {users.map((user: User, index) => (
        <UserCard user={user} key={index}/>
      ))}
    </div>
  );
}

export default UserList;
