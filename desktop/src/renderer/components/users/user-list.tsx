import { useGetUsers } from 'renderer/hooks/use-get-users';
import { User } from 'renderer/utils/types';

const UserList = () => {
  const { data: users = [] } = useGetUsers();

  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;
