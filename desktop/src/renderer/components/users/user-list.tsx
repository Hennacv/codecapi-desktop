import { useGetUsers } from 'renderer/hooks/use-get-users';
import { User } from 'renderer/utils/types';
import UserCard from './user-card/user-card';
import { UserCardsContainer } from './user-card/user-card-styles.css';

const UserList = () => {
  const { data: users = [] } = useGetUsers();

  return (
    <div className={UserCardsContainer}>
      {users.map((user: User) => (
        <UserCard user={user}/>
      ))}
    </div>
  );
}

export default UserList;
