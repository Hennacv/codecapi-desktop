import { useGetUsers } from 'renderer/hooks/use-get-users';
import { User } from 'renderer/utils/types';
import UserCard from './user-card/user-card';

const UserList = () => {
  const { data: users = [] } = useGetUsers();

  return (
    <div>
      {users.map((user: User) => (
        <UserCard user={user}/>
      ))}
    </div>
  );
}

export default UserList;
